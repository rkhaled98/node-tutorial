app.post('/users', (req, res) => {
// create a new user
const user = createUser(req.body)
res.location(`/users/${user.id}`)
res.status(201)
})
