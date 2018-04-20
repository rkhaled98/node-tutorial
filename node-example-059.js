const pg = require('pg')
const conString = "postgres://usr:pwd@serverName/databaseName"
const year = 1982
pg.connect(conString, (err, client) => {
client.query({text:"SELECT * FROM movies WHERE year = $1", values:
[year]}}, (err, res) => {
// do something with data
})
})
