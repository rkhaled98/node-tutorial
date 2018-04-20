const client = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydatabase'
client.connect(url, (err, db) => {
// do something here
db.close()
});
