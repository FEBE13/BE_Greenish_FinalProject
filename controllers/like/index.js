const LIKE = require('../../models/likes')
module.exports = {
    getLike: async (req,res)=>{
        const data = await LIKE.find({},"-__v").populate("id_user","name").populate("id_article","title")
        res.json({
            Message : "get all data like",
            data
        })
    },
    getLikeByUserId : async (req,res) =>{
        const {id} = req.params
        const data = await LIKE.find({id_user : id}).populate("id_user","name").populate("id_article","title")
        res.json({
            Message : "get all data like by user id",
            data
            
        })
    },
    postLike : async (req,res) =>{
        const likes = req.body
        const data = new LIKE(likes)
        data.save()
        res.json({
            Message : "Succses post like",
            data
        })
    },
}