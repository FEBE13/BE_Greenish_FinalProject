const express = require('express')
const router = express.Router()
const {getAllparticipant,getParticipantbyEventId,getParticipantbyUserId,postParticipant} = require('../../controllers/participant')

router.get('/',getAllparticipant)
router.get('/participantEvent/:id',getParticipantbyEventId)
router.get('/participantUser/:id',getParticipantbyUserId)
router.post('/',postParticipant)





module.exports = router