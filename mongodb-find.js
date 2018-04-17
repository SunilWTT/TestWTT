const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('http://NodeTrainingWTT:node2018@ds121189.mlab.com:21189/nodemongo', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('TestWTT').find({city: 'hyderabad'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
});