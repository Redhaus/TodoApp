var mongoose = require('mongoose')

const User = mongoose.model('User', {
    email: {
        require: true, 
        type: String,
        trim: true, 
        minlength: 1
    }
})


module.exports = {
    User
}




// var user = new User({
//     email: 'bread@iequals.com'
// })

// user.save().then((doc) => {
//     console.log(doc)
// }, (e) => {
//     console.log(e)
// })