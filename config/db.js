const mongose = require('mongoose')

const db = mongose.connect(process.env.MONGO_URL)


module.exports = db;