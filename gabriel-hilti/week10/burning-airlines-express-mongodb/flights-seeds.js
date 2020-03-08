const MongoClient = require('mongodb').MongoClient;
let db; // global var to store the db connection object

MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err, client) => {
  if( err ) return console.log(err);  // early return on error

  const dbName = 'ba';
  console.log( 'Using database:', dbName );
  db = client.db( dbName ); // success!

  console.log(db.collection('flights').find({"origin": "SYD"}));
  // How to remove all flights first??????

  // How to insert flights?
  // HUGE HINT: Something called .insertMany()
  // ALSO: use 'new Date("...")' instead of 'ISODate("...")'

});
