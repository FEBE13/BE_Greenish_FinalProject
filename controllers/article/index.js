const ARTICLES = require('../../models/articles')

module.exports = {
    getAllArticle : async (req,res) =>{
        const data = await ARTICLES.find({},"-__v")
        res.json({
            Message : "Succses Get data articles",
            data
        })
    },
    getArticleById : async (req,res) => {
        const {id} = req.params
        const data = await ARTICLES.findById(id)
        res.json({
            Message : "Succses Get data articles by id",
            data
        })
    },
    postArticle : async (req,res)=>{
        const userBody = req.body
        const data = new ARTICLES(userBody)
        data.save()
        res.json({
            Message : "Succses post article",
            data
        })
    },
    updateLikeArticle : async (req,res) =>{
        const {id} = req.params
        const dataEvent = await ARTICLES.findById(id)
        const before = dataEvent.likes
        const newData = before + 1
        // const personUpdate = before + 1
        const data = await ARTICLES.findByIdAndUpdate(id,{likes : newData})
        data.save()
        res.json({
            mess : "succes update data",
            before,
            newData
        })
    },
    updateArticle : async (req,res) =>{
        const {id} = req.params
        const dataNew = req.body
        const data = await ARTICLES.findByIdAndUpdate(id,dataNew)
        data.save()
        res.json({
            mess : "succes update data",
            data
        })
    },
    deleteArticle : async(req,res) =>{
        const {id} = req.params
        await ARTICLES.findByIdAndDelete(id).then(()=>{
            res.json({
                mess : 'berhasil hapus event'
            })
        }).catch((err)=>{
            console.log(err)
        })
    }


}