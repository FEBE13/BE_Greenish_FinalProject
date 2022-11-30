const express = require('express')
const router = express.Router()
const {getAllparticipant,deleteParticipant,getParticipantbyEventId,getParticipantbyUserId,postParticipant} = require('../../controllers/participant')

router.get('/',getAllparticipant)
router.get('/participantEvent/:id',getParticipantbyEventId)
router.get('/participantUser/:id',getParticipantbyUserId)
router.delete('/:id',deleteParticipant)
router.post('/',postParticipant)





module.exports = router