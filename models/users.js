const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema ({
    name: String,
    email : String,
    pass : String,
    role : String
})

const USERS = mongoose.model("USERS",userSchema)

module.exports = USERS;