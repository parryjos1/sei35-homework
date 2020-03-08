const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.argv[2] || 1337;

const MongoClient = require('mongodb').MongoClient;
let db; // global var to store the db connection object

MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err, client) => {
  if( err ) return console.log(err);  // early return on error

  const dbName = 'ba';
  console.log( 'Using database:', dbName );
  db = client.db( dbName ); // success!

  app.use(cors());

  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/flights', (req, res) => {
    db.collection('flights').find({}).toArray(function(err, result) {
      if (err) throw err;
      const newResult = {flight: result};
      res.json(newResult);
    });
  });

  app.get('/flights/:id', (req, res) => {
    const flight_id = req.params.id;
    console.log('id', flight_id);
    const reservations_lookup = {};
    const user_reservations_lookup = {};
    const fake_current_user_id = 13;
    const query = {};
    query.id = parseInt(flight_id);

    db.collection('flights').findOne(query, function(err, result) {
      if (err) throw err;

      result.reservations.forEach(res => {
        if (res.passenger.id === fake_current_user_id) {
          user_reservations_lookup[`${res.row}-${res.col}`] = 1;
        } else {
          reservations_lookup[`${res.row}-${res.col}`] = 1;
        }
      });

      const newResult = {flight: {...result}, user_reservations: user_reservations_lookup, reservations: reservations_lookup};
      res.json(newResult);
    });

  });

  app.get('/flights/search/:origin/:destination', (req, res) => {

    const {origin, destination} = req.params;
    const query = {origin: origin, destination: destination};

    db.collection('flights').find(query).toArray((err, result) => {
      res.json(result);
    });
  });

  app.post('/reservations', (req, res) => {
    const row = req.body.row;
    const col = req.body.col;
    const user_id = req.body['user_id'];
    const flight_id = req.body['flight_id'];


    const query = {flight_id}


    const data = { row, col, passenger: {user_id} };

    const bulk = db.collection('flights').initializeUnorderedBulkOp();
    bulk.find(query);
    bulk.insert(data, (err, result) => {
        if (err) throw err;
        console.log('post', result);
        res.json(result);
    });
    bulk.execute();

    // res = Reservation.create(
    //   row: params[:row],
    //   col: params[:col],
    //   user_id: params[:user_id],  # DON'T DO THIS! Use current_user
    //   flight_id: params[:flight_id]
    // )
    //
    // if res.persisted?
    //   # Send back the reservation object that was successfully created
    //   render json: res
    // else
    //   # Send back an error hash, including the ActiveRecord validation error messages
    //   render json: { error: true, messages: res.errors.full_messages }
    // end
  });

  app.use((req, res) => {
    res.sendStatus(404);
  });

  app.listen(PORT, () => console.log(`You are listening on http://localhost:${PORT}...`));


});
