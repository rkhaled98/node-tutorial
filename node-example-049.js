function checkPermissionMiddleware(req, res, next){
// verify permissions. If ok call next()
if (ok){
next()
} else {
res.status(401)
}
}
app.post('/users', checkPermissionMiddleware, (req, res) => {
// create a new user
const user = createUser(req.body)
res.location(`/users/${user.id}`)
res.status(201)
})
