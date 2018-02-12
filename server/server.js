// import express and body parser as middleware
var express = require('express')
var bodyParser = require('body-parser')

// import local mongoose db connect and data models
var { mongoose } = require('./db/mongoose')
var { User } = require('./models/user')
var { Todo } = require('./models/todo')

// create app from express
var app = express();

// setup Middleware that allows us to send json
// and converts it to object, that is then attached to request object
// and sent to express server
app.use(bodyParser.json());

// Set up post requests route
// create route  (url, callback)
// resource creation /todos or /posts is common
app.post('/todos', (req, res) => {
    // console.log(req.body)// added via postman and it logged

    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then( (doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)

    })

})

// point app to server location
app.listen(3000, () => {
    console.log('Started on port 3000')
})


