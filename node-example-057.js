const pg = require('pg')
const conString = "postgres://usr:pwd@serverName/databaseName"
pg.connect(conString, (err, client) => {
// Do something with client here
})
