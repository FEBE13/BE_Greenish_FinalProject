const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema ({
    id_user: {
        type : mongoose.ObjectId,
        ref : "USERS"
    },
    id_article : {
        type : mongoose.ObjectId,
        ref : "ARTICLES"
    },
})

const LIKE = mongoose.model("LIKE",userSchema)

module.exports = LIKE;