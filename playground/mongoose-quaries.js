const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


// let id = '5b44b4557aad61467d1a23e11'

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found')
//     }
//     console.log('Todo By ID', todo)
// }).catch((e) => console.log(e))

User.findById(`5b4467686b361e9f4f2c1256`).then((user) => {
    if(!user){
       console.log('Uable to find User')
    }

    console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log(e)
})