// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database ');
  }
  console.log('Connected to Mongo DB server');

  db.collection('Todos').find().count().then((count)=>{
    console.log("Todos Count", count);
  }, (err) => {
    console.log('Error', err);
  });

  db.collection('Users').find({age : 22}).toArray().then((data) => {
    console.log('Users Data');
    console.log(JSON.stringify(data, undefined, 2));
  }, (err) => {
    if(err){
      return console.log('Unable to find data', err);
    }
  });
  db.close();
});
