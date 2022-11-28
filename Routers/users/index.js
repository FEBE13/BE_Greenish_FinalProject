const express = require('express')
const router = express.Router()
const {getAllUser,getUserById,postUser,Login,updateUser,deleteUser} = require('../../controllers/user')


router.get('/',getAllUser)
router.get('/:id',getUserById)
router.post('/',postUser)
router.post('/login',Login)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)







module.exports = router