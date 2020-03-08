const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  flight_number: String,
  origin: String,
  destination: String,
  departure_date_formatted: Date,
  airplane: {name: String, rows: Number, cols: Number},
  reservations: [{row: Number, col: Number}],
  user_reservations: [{row: Number, col: Number}]
});

module.exports = mongoose.model('Flight', flightSchema);
