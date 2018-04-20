const express = require('express')
const app = express()
app.get('/users', (req, res) => {
const users = [{id: 1, name: 'Emanuele'}, {id: 2, name: 'Tessa'}]
res.send(users)
})
app.get('/users/:id', (req, res) => {
// get the user with the specified id
})
app.post('/users', (req, res) => {
// create a new user
const user = createUser(req.body)
res.location(`/users/${user.id}`)
res.status(201)
})
app.put('/users/:id', (req, res) => {
// update the user with specified id
})
app.delete('/users/:id', (req, res) => {
// delete the user with specified id
})
app.listen(8000, () => {
console.log('Example app listening on port 8000!');
})

app.set('view engine', 'jade')
app.set('views', './views')

app.get('/hello', function (req, res) {
res.render('hello', {
title: 'Hey',
messageTitle: 'Hello noders',
messageText: 'lorem ipsum....'
})
})
