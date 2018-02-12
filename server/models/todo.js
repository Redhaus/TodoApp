var mongoose = require('mongoose')

// Define Model of Todo
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    
    },
    completed: {
        type: Boolean,
        default: false

    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
}




// var newTodo = new Todo({
//     text: "Go get groceries",
//     completed: false,
//     compeletedAt: 1235
// })

// newTodo.save().then( (doc) => {
//     console.log("Saved todo: ", doc)
// }, (e) => {
//     console.log("unable to save")
// });

// var newTodo = new Todo({
//     text: "Get all the food"
// })

// newTodo.save().then( (doc) => {
//     console.log(doc)
// }, (e) => {
//     console.log("Unable to connect")
// })
