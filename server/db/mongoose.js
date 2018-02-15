// import mongoose 
var mongoose = require('mongoose');

// promise library assignment
mongoose.Promise = global.Promise;

// Connect to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp")

module.exports = {
    mongoose: mongoose
}