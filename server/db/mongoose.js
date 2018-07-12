let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://ansariadil81@gmail.com:@9013146767aD@ds233571.mlab.com:33571/adil1995` || 'mongodb://localhost:27017/TodoApp');

module.exports ={mongoose};
