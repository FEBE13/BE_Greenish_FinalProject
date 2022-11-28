const express = require('express')
const router = express.Router()
const {getLike,getLikeByUserId,postLike} = require('../../controllers/like')


router.get('/',getLike)
router.get('/:id',getLikeByUserId)
// router.get('/likeArticle/:id',getLikeByArticleId)
router.post('/',postLike)
module.exports = router