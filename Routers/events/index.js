const express = require('express')
const router = express.Router()
const {getAllEvent,getEventById,getEventByName,postEvent,updateEvent,updateEventParticipant,deleteEvent} = require('../../controllers/event')

router.get('/',getAllEvent)
router.get('/:id',getEventById)
router.get("/search",getEventByName)
router.post('/',postEvent)
router.put('/person/:id',updateEventParticipant)
router.put('/:id',updateEvent)

router.delete('/:id',deleteEvent)



module.exports = router