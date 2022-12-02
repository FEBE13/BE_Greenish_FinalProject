const express = require('express')
const router = express.Router()
const {getAllArticle,deleteArticle,updateArticle,getArticleById,postArticle,updateLikeArticle} = require('../../controllers/article')



router.get('/',getAllArticle)
router.get('/:id',getArticleById)
router.post('/',postArticle)
router.put('/likeby/:id',updateLikeArticle)
router.put('/:id',updateArticle)
router.delete('/:id',deleteArticle)






module.exports = router