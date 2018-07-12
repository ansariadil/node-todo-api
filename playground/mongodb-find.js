const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('unable to connect to MongoDB');
    }
    console.log('Coneected to MongoDB server()');

    const db = client.db('TodoApp')

    // db.collection('users').find({
    //     name: "Naveen Rana"
    // }).toArray().then((docs, err) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('unable to fatch todos', err)
    // })

    // db.collection('users').find().count().then((count) => {
    //     console.log(`Todos Counts ${count}`)
    //     // console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('unable to fatch todos', err)
    // })
    
    db.collection('users')
    .find({location: 'Delhi0'})
    .toArray()
    .then((docs) => {
                console.log(JSON.stringify(docs, undefined, 2))       
        }, (err) =>{
            console.log('Not Found', err)
    })
    
    client.close();
});