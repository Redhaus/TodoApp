const {ObjectID} = require('mongoose')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// will remove everything
// Todo.remove({}).then((result)=> {
//     console.log(result)
// })

// Todo.findOneAndRemove({queryObj})
Todo.findByIdAndRemove('5a863a1d9adc887b25744f56').then((todo) => {
    console.log('removed: ', todo)
})