const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/contact', function(req, res) {
    res.send('Contact Us')
})

app.listen(8080, function() {
    console.log('Listening at port 8080.')
})