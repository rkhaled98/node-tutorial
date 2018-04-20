const pg = require('pg')
const conString = "postgres://usr:pwd@serverName/databaseName"
const movies = []
const query = client.query('select title, year from movies')
query.on('row', function(row, result) {
movies.push(rows
53});
query.on('end', function(result) {
console.log(movies.length + ' movies were load');
});
