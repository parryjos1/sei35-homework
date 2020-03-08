const express = require('express');
const app = express();
const PORT = 1337;

const cors = require('cors');
app.use(cors());  // User cors package as middleware, i.e. add the CORS allow response header

app.use( express.json() );  // Enable support for JSON-encode request bodies (formdata)

const mongoose = require('mongoose');
const Flight = require('./models/flight');

mongoose.connect('mongodb://127.0.0.1:27017/ba', { useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

app.get('/flights', (req, res) => {

  // exec for getting real Promise
  db.model('Flight').find().exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });

});

app.get('/flights/search/:origin/:destination', (req, res) => {

  console.log(req.params);

  const { origin, destination } = req.params; // ES6 destructuring

  Flight.find({ origin, destination }).exec()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });

});  // GET /flights/search

app.get('/flights/:flight_number', (req, res) => {

  Flight.findOne({flight_number: req.params.flight_number}, (err, result) => {
    if ( err ) {
      return console.log('Flight find error', err);
    }

    const reservations = {};
    const user_reservations = {};
    result.reservations.forEach(r => reservations[`${r.row}-${r.col}`] = 1);
    result.user_reservations.forEach(r => user_reservations[`${r.row}-${r.col}`] = 1);

    // Construct a response object that has the same shape as the Rails response
    // that the Vue axios code is expecting
    const response = {
      flight: result,
      reservations,
      user_reservations
    };

    res.json(response);

  });  // findOne()
});  // GET /flights/:id

app.post('/reservations/', (req, res) => {

  // dynamic approach for updating
  const reservation = {};
  for (const ops of Object.keys(req.body)) {
    reservation[ops.propName] = ops.value;
  }

  // no validation for current_user -> either added as reservation or as user_reservation
  let user_reservation = {};
  user_reservation = {
    col: req.body.col,
    row: req.body.row,
    user_id: 13
  };

  Flight.updateOne(
    // Find the document you want to update:
    { flight_number: req.body.flight_id },

    // Specify the new fields for the document
    {
      $push: {                    // append to the reservations array, don't overwrite it
        reservations: reservation
        // {
        //     row: req.body.row,
        //     col: req.body.col,
        //     user_id: req.body.user_id   // NOPE WRONG
        // }
      },
      $push: {
        user_reservations: user_reservation
      }
    }).exec()
    .then(result => {
      res.json({
        row: req.body.row,
        col: req.body.col
      });
    })
    .catch(err => {
      console.log('Reservation creates error', err);
      res.status(500).json({error: err});
    });


});  // POST /reservations

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT} ...`));
