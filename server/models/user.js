const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    dateOfBirth: {
        type: Date,
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    }
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;