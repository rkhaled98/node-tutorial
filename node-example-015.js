function concatP(a, b) {
return new Promise(resolve => {
concat(a,b, resolve)
})
}
function upperP(a) {
return new Promise(resolve => {
upper(a, resolve)
})
}
function decorP(a) {
return new Promise(resolve => {
decor(a, resolve)
})
}

concatP('hello', 'world')
.then(upperP.bind(this))
.then(decorP.bind(this))
.then(console.log) // *HELLOWORLD*
