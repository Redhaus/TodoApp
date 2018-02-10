// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //same syntax as above

// you can create your own objectID's in Mongo
// var obj = new ObjectID();
// console.log(obj)


// Connect to DB provide url to DB and callback function
// If DB is not available it will be created
// and callback function to hanle error and success case
// takes two args
// accepts (url, response callback funct)
MongoClient.connect('mongodb://localhost:27017', (err, client) => {

// Destructuring pulling name off user obj
// var user = {name: 'ben', age: 24}
// var {name} = user;



// using client create var reference client.db and give it name of db
const db = client.db('TodoApp')

    if(err){
        return console.log("Unable to connect to MongoDB")
    }

    console.log("Connected to MongoDB")

    // Createa new collection and insert item, provide object for fields 
    // ands the handle error and success
    // db.collection('Todos').insertOne({

    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if(err){
    //         return console.log('Error Connecting: ', err)
    //     }
    //     // ops are all docs inserted
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // insert new doc into Users collection (name, age, location)

    db.collection('Users').insertOne({
        name: "Benjamin",
        age: 39,
        location: "Portland, OR"

    }, (err, result) => {
        if(err){
            return  console.log(err)
        }

        // console.log(result.ops[0]._id)
        // console.log(result.ops[0]._id.getTimestamp());
        

    })

    client.close();

})