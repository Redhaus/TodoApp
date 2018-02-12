const { MongoClient, ObjectID } = require('mongodb'); 

// Connect to DB provide url to DB and callback function
// accepts (url, response callback funct)
MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    // using client create var reference client.db and give it name of db
    const db = client.db('TodoApp')

    if(err){
        return console.log("Unable to connect to MongoDB")
    }
    console.log("Connected to MongoDB")

    // DELETE DATA
    // deleteMany deletes all based on filter criteria provided
    // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
    //     console.log(result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: "eat lunch"}).then((res)=> {
    //     console.log(res)
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res)
    // })


    // db.collection('Users').deleteMany({name: "Sam"}).then((res) => {
    //     console.log(res)
    // })

    db.collection('Users').findOneAndDelete({_id: ObjectID("5a7f24b92d94131b216e8ef3")}).then((res) => {
        console.log(res)
    })

    // client.close();

})