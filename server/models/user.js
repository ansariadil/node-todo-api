let mongoose = require('mongoose')

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlenth:1
    }
})

module.exports ={User}