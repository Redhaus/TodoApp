const {ObjectID} = require('mongoose')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = "5a810b43782ce6327bea1b8d"

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// find db item by id
// just pass id, mongoose will convert to object id
// find will return more than one usually
// returns array
// Todo.find({
//     _id: id
// }).then( (todos) => {
//     if(todos.length === 0 ){
//         return console.log('ID not found')
//     }
//     console.log('Todos: ', todos)
// })

// findOne will only return one
// returns object item
// Todo.findOne({
//     _id:id
// }).then( (todo) => {
//     if(!todo){
//         return console.log('ID not found')
//     }
//     console.log('Todo: ', todo)
// })

// Todo.findById(id).then( (todo) => {
//     if(!todo){
//         return console.log('ID not found')
//     }
//     console.log('TodoByID: ', todo)
// }).catch( (e) => {
//     console.log(e)
// })

User.findById('5a81150991c59434e9be39d5').then( (user) => {
    
    if(!user){ 
        return console.log('cant find')
    }

    console.log('User:', user)
}).catch( (e) => {
    console.log('Cant find UserID:',  e)
})

// Query user collection 
// grab id 
// find by id