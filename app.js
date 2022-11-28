const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const allRouter = require('./Routers')
const db = require('./config/db')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allRouter)
db.then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err)
})



app.listen(8080,()=>{
    console.log("server running in port : 8080")
})