let mongoose = require('mongoose')
let MONGOLAB_URI="mongodb://Adil1995:1234567890a@ds233571.mlab.com:33571/adil1995"

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports ={mongoose};
