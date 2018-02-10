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


    // fetch Data
    // toArray provides array of object documents
    // to array returns promise
    // add query between find obj brackets
    // when call by id needs to be new ObjectID('<id>')
    // db.collection('Todos').find({
    //     _id: new ObjectID("5a7d26e61faf79094a9dd4e4"
    // )}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to connect :', err)
    // });

    // use count function, then call promise
    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count: ', count);
    // }, (err) => {
    //     console.log('Unable to connect :', err)
    // });


    // to array returns promise of all users below
    // db.collection('Users').find().toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to connect :', err)
    // });


    //specific user
    // db.collection('Users').find({name: "Benjamin"}).toArray().then((docs) => {
    //     // console.log(docs);
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log(err)
    // })

    // query array
    // https://docs.mongodb.com/manual/tutorial/query-arrays/
    // return red and blue items with no preferece to order
    db.collection('Users').find({
        colors: { $all: ["red", "blue"]}
    }).toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    })



    // client.close();

})