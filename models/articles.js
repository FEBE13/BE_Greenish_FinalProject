const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema ({
    title: String,
    content : String,
    author : String,
    date : Date,
    likes : Number
})

const ARTICLES = mongoose.model("ARTICLES",userSchema)

module.exports = ARTICLES;