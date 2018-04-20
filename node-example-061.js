const pg = require('pg')
const conString = "postgres://usr:pwd@serverName/databaseName"
const year = 1982
pg.connect(conString, (err, client) => {
client.query({text:"INSERT INTO movies(title, year) VALUES($1, $2)",
values: ['The Matrix','1999']}}, (err, res) => {
// check err to see if everything is ok.
})
})
