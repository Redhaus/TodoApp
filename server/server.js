// import express and body parser as middleware
const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')


// import local mongoose db connect and data models
var { mongoose } = require('./db/mongoose')
var { User } = require('./models/user')
var { Todo } = require('./models/todo')
var { ObjectID } = require('mongodb')

// create app from express
var app = express();
const port = process.env.PORT || 3000

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

    // save to db if successful send back doc if not send back error
    // response doc will provide id and other properties not set by user
    todo.save().then( (doc) => {
        res.send(doc)
    }, (e) => {
        res.status(404).send(e)
    })

})



app.get('/todos', (req, res) => {
    //Ref Import model Todo
    Todo.find().then( (todos) => {
        res.send({todos})
    }, (e) => {
        res.status(404).send(e)
    })

})


// get todos/123455
app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    // console.log(ObjectId)

    if(!ObjectID.isValid(id)){
        console.log('not valid bitch')
    }

    Todo.findById(id).then( (todo) => {
        if(!todo){
            return res.status(404).send('nope')
        }
        res.send({todo})
    }, (e) => {
        res.status(404).send('')
    })
    // req.params.value
    // res.send(req.params)
    
})

// setup rest endpoint for delete
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id; // get id from req.param

    if(!ObjectID.isValid(id)){ // check if id is valid
        return res.status(404).send('not valid')
    }

    //mongo delete by id function
    Todo.findByIdAndRemove(id).then( (todo) => {
        if(!todo){ //if not todo return 400 error
            return res.status(404).send('not valid')
        }

        res.send({todo}) //if available respond with todo 

    }).catch((e) => {
      
        res.status(404).send('') 
       
    })


})


// update items
// app.patch('/todos/:id', (req, res) => {
//     var id = req.params.id; 

//     //create body var outlining what can be updated
//     // pick function pics text and complted off req.body object
//     var body = _.pick(req.body['text', 'completed']);

//     if(!ObjectID.isValid(id)){ // check if id is valid
//         return res.status(404).send('not valid id')
//     }

//     // check if completed is bool and if it is true set completed at
//     // this is how we update completed at property
//     if(_.isBoolean(body.completed) && body.completed){
//         body.completedAt = new Date().getTime();
//     } else { //else make it false and reset
//         body.completed = false
//         body.completedAt = null
//     } 

//     // update body of todo
//     Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
//         .then( (todo) => {
//             if(!todo){ // if no todo return 404
//                 return res.status(404).send("Can't find ")
//             }

//             res.send({todo}) //return todo if there
//             // res.send({todo:todo}) 
            

//         }).catch((e) => {
//             res.status(404).send('No update')
//         })

// })


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
  
    if(!ObjectID.isValid(id)){ // check if id is valid
        return res.status(404).send('not valid id')
    }
  
    // check if completed is bool and if it is true set completed at
    // this is how we update completed at property
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else { //else make it false and reset
        body.completed = false
        body.completedAt = null
    } 

        // update body of todo
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then( (todo) => {
            if(!todo){ // if no todo return 404
                return res.status(404).send("Can't find ")
            }

            res.send({todo}) //return todo if there
            // res.send({todo:todo}) 
            

        }).catch((e) => {
            res.status(404).send('No update')
        })


  });




// point app to server location
app.listen(port, () => {
    console.log(`Started on port ${port}`)
})



// valid id using is valid 
// 404 if not

// find by id
// success
// error