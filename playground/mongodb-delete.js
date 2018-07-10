const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('unable to connect to MongoDB');
    }
    console.log('Coneected to MongoDB server()');

    const db = client.db('TodoApp')

    // //deleteMany
    // db.collection('Users').deleteMany({
    //     name: 'Naveen Rana'
    // }).then((result) => {
    //     console.log(result)
    // })

    //deleteDuplicateUsers
    db.collection('Users').deleteMany({name: 'Naveen Rana'})

    // //deleteOne
    // db.collection('Users').deleteOne({
    //     name: 'Naveen Rana'
    // }).then((result) => {
    //     console.log(result)
    // })

    // //findOneand Delete
    // db.collection('Users').findOneAndDelete({
    //     name: 'Naveen Rana'
    // }).then((result) => {
    //     console.log(result)
    // })




    
    client.close();
});