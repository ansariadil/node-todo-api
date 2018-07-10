let mongoose = require('mongoose')

let User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlenth:1
    }
})

module.exports ={Users}