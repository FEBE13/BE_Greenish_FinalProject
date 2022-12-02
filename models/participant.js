const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema ({
    id_user: {
        type : mongoose.ObjectId,
        ref : "USERS"
    },
    id_event : {
        type : mongoose.ObjectId,
        ref : "EVENTS"
    },
    address : String,
    phone : String,
    city : String,
    zip : String
})

const PART = mongoose.model("PARTICIPANT",userSchema)

module.exports = PART;