let {ObjectID} = require('mongodb');

let {mongoose} = require('./../server/db/mongoose');
let {Todo} = require('./../server/models/todo');
let {User} = require('./../server/models/user');

//Todo.remove() remove All
Todo.remove({}).then((result) => {
  console.log(result)
})

// Todo.findOneAndRemove

Todo.findByIdAndRemove('123').then((todo) => {
    connsole.log(todo)
})