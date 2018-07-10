const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('unable to connect to MongoDB');
    }
    console.log('Coneected to MongoDB server()');

    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b4467636b361e9f4f2c1254')
    },{
        $set:{
            name: "Aakil",
            dob: "23/04/1990",
            age: 29
        }
    },{
        returnOriginal: false
    } ).then((result) =>{
        console.log('resulr\n',result)
    })

    db.close();

})