const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('unable to connect to MongoDB');
    }
    console.log('Coneected to MongoDB server()');

    const db = client.db('TodoApp')

    // //deleteMany
    // db.collection('users').deleteMany({
    //     name: 'Naveen Rana'
    // }).then((result) => {
    //     console.log(result)
    // })

    //deleteAllDuplicateUsers
    db.collection('users').deleteMany({name: 'Naveen Rana'})

    // //deleteOne
    // db.collection('users').deleteOne({
    //     name: 'Naveen Rana'
    // }).then((result) => {
    //     console.log(result)
    // })

    // //findOneand Delete
    // db.collection('users').findOneAndDelete({
    //     name: 'Naveen Rana'
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('users').





    
    client.close();
});