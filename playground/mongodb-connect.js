// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('unable to connect to MongoDB');
    }
    console.log('Coneected to MongoDB server()');

    const db = client.db('TodoApp')

    db.collection('users').insert([{
        name: 'Adil Ansari',
        age: 22,
        dob: '08/10/1995',
        location: 'Delhi'
    },{
       name: 'Arpit Jain',
       age: 21,
       dob: '01/02/1996',
       location: 'Delhi'      
    },{
       name: 'Naveen Rana',
       age: 23,
       dob: '08/11/1994',
       location: 'Delhi'
    }], (err, result) => {
        if(err){
            return console.log('Unable to insert', err)
        }
        console.log(JSON.stringify(result.ops, undefined,2));
    })

    client.close();
});