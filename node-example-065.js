const client = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydatabase'
client.connect(url, function(err, db) {
const collection = db.collection('movies')
collection.find({year: 1982}).toArray((err, movies) => {
// do something with movies array
})
db.close();
});
