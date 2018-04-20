const express = require('express')
const app = express()
app.get('/users', (req, res) => {
const users = [{id: 1, name: 'Emanuele'}, {id: 2, name: 'Tessa'}]
res.send(users)
})
app.listen(8000, () => {
console.log('Example app listening on port 8000!');
})
app.post('/users', (req, res) => {
// create a new user
const user = createUser(req.body)
res.location(`/users/${user.id}`)
res.status(201)
})
