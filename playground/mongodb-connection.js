// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database ');
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').insertOne({
  //   text : 'Some other text here',
  //   completed : false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Data not inserted', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Jordan',
    age: 22,
    location: 'Jaipur'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
