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


    // findOneAndUpdate(filter, update, options, callback){Promise}
    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID("5a7f2c09ea3fc112d57f638e")
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate(
        {
            _id: ObjectID("5a7d2950df6f2b09972f3ca6")
        },{
            $set: {
                name: "Simon"
            },
            $inc: {
                age: 1
            }
            
        },{
            returnOriginal: false
        }
    
    ).then( (result) => {
        console.log(result)
    })


    // client.close();

})