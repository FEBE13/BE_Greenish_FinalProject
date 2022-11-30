const PARTICIPANTS = require('../../models/participant')
module.exports = {
    getAllparticipant: async (req,res)=>{
        const data = await PARTICIPANTS.find({},"-__v").populate("id_user","name").populate("id_event","name")
        res.json({
            Message : "get all data participant",
            data
        })
    },
    getParticipantbyEventId : async (req,res) =>{
        const {id} = req.params
        const data = await PARTICIPANTS.find({id_event : id}).populate("id_user","name").populate("id_event","name")
        res.json({
            Message : "get all data participant by event",
            data
        })
    },
    deleteParticipant : async (req,res) =>{
        const {id} = req.params
        const data = await PARTICIPANTS.findByIdAndDelete(id)
        res.json({
            Message : "get all data participant by event",
            data
        })
    },
    getParticipantbyUserId : async (req,res) =>{
        const {id} = req.params
        const data = await PARTICIPANTS.find({id_user : id}).populate("id_user","name").populate("id_event","name")
        res.json({
            Message : "get all data participant by user id",
            data
            
        })
    },
    postParticipant : async (req,res) =>{
        const participant = req.body
        const data = new PARTICIPANTS(participant)
        data.save()
        res.json({
            Message : "Succses post participant",
            data
        })
    },
}