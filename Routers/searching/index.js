const express = require('express')
const router = express.Router()
const {getEventByName} = require('../../controllers/event')
const {getUserByName} = require('../../controllers/user')

router.get("/event",getEventByName)
router.get("/user",getUserByName)
module.exports = router