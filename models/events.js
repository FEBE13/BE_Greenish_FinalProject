const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema ({
    name: String,
    poster : String,
    desc : String,
    date : Date,
    place: String,
    organizer : String,
    CP : String,
    phone : String,
    person : Number,
    maxPerson : Number  
})

const EVENTS = mongoose.model("EVENTS",userSchema)

module.exports = EVENTS;