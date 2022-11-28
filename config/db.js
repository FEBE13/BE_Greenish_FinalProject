const mongose = require('mongoose')

const db = mongose.connect('mongodb://127.0.0.1:27017/Greenish')


module.exports = db;