const pg = require('pg')
const conString = "postgres://usr:pwd@serverName/databaseName"
pg.connect(conString, (err, client) => {
client.query("SELECT * FROM movies", (err, res) => {
// res.rows contains the record array
})
})
