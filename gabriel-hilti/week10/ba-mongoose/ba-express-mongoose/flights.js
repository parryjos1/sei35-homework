const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ba', { useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));  // how exactly does bind work?
db.once('open', () => {
  // we're connected

  // Schema
  const flightSchema = new mongoose.Schema({
    flight_number: String,
    origin: String,
    destination: String,
    departure_date_formatted: Date,
    airplane: {name: String, rows: Number, cols: Number},
    reservations: [{row: Number, col: Number}]
  });

  flightSchema.methods.info = () => {
    //const reservations = this.reservations.map(r => `${r.row}${String.fromCharCode(r.col + 64)}`);
    //const text = `Flight #${this.flight_number} departues from ${this.origin} at ${this.departure_date_formatted} and lands in ${this.destination}. The airplane ${this.airplane.name} has ${this.airplane.rows} and ${this.airplane.cols}.\n Following seats are already booked: .`; // ${reservations.join('\n')}
    console.log(this.origin);
  }

  // compiling schema into a model
  const Flight = mongoose.model('Flight', flightSchema, 'flight');

  // documents
  const flight1 = new Flight({
    flight_number: '123',
    origin: 'SYD',
    destination: 'SFO',
    departure_date_formatted: new Date("2018-12-25T20:20:00Z"),
    airplane: {name: '757', rows: 50, cols: 8},
    reservations: [
      { row: 10, col: 3 },
      { row: 11, col: 2 }
    ]
  });

  const flight2 = new Flight({
    flight_number: "456",
    origin: "SYD",
    destination: "SFO",
    departure_date_formatted: new Date("2018-12-30T12:12:00Z"),
    airplane: { name: "737", rows: 40, cols: 4 },
    reservations: [
      { row:1, col: 2, passenger: { id: 13, name: "test guy", email: "test@guy.com"} },
      { row:2, col: 3, passenger: { id: 14, name: "other guy", email: "other@guy.com"} }
    ]
  });

  const flight3 = new Flight({
    flight_number: "789",
    origin: "SYD",
    destination: "SIN",
    departure_date_formatted: new Date("2018-12-31T23:23:23Z"),
    airplane: { name: "757", rows: 50, cols: 8 },
    reservations: [
      { row:5, col: 6 },
      { row:5, col: 7 }
    ]
  });

  Flight.deleteMany({}, function(err) {
    if (err) console.error('Couldn\'t delete all flight records', err);
    console.log('All flight documents are deleted!');
  }).then(async () => {
    await flight1.save();
    await flight2.save();
    await flight3.save();
  }).then(async () => {
    await Flight.find({}, (err, docs) => {
      if (err) return ('Couldn\'t find any records', err);
      console.log(docs);
    });
  }).then(() => {
    db.close();
  }).catch((err) => {
    console.error(err);
  });

});
