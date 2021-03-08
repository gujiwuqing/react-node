const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
})

module.exports = mongoose.model('User', Schema)