const express = require('express')
const router = express.Router()
const users = require('./users')
const events = require('./events')
const articles = require('./articles')
const participants = require('./participants')
const search = require('./searching')
const like = require('./likes')


router.use("/users",users)
router.use("/articles",articles)
router.use("/events",events)
router.use("/auth",users)
router.use("/search",search)
router.use("/participants",participants)
router.use("/like",like)



module.exports = router