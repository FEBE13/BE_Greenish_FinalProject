const EVENTS = require('../../models/events')

module.exports = {
    getAllEvent : async (req,res) =>{
        const data = await EVENTS.find({},"-__v")
        res.json({
            Message : "Succses Get data event",
            data
        })
    },
    getEventById : async (req,res) => {
        const {id} = req.params
        const data = await EVENTS.findById(id)
        res.json({
            Message : "Succses Get data event by id",
            data
        })
    },
    getEventByName :  async (req,res) => {
        const quer = req.query.name
        const data = await EVENTS.find({name : {$regex: quer , $options: 'i'}})
        res.json({
            Message : "Succses Get data event name",
           data
        })
    },
    postEvent : async (req,res)=>{
        const userBody = req.body
        const data = new EVENTS(userBody)
        data.save()
        res.json({
            Message : "Succses post event",
            data
        })
    },
    updateEventParticipant : async (req,res)=>{
        const {id} = req.params
        const dataEvent = await EVENTS.findById(id)
        const before = dataEvent.person
        const newData = before + 1
        // const personUpdate = before + 1
        const data = await EVENTS.findByIdAndUpdate(id,{person : newData})
        data.save()
        res.json({
            mess : "succes update data",
            before,
            newData
        })
    },
    updateEvent : async (req,res) => {
        const {id} = req.params
        const dataNew = req.body
        const data = await EVENTS.findByIdAndUpdate(id,dataNew)
        data.save()
        res.json({
            mess : "succes update data",
            data
        })
    },
    deleteEvent : async (req,res)=>{
        const {id} = req.params
        await EVENTS.findByIdAndDelete(id).then(()=>{
            res.json({
                mess : 'berhasil hapus event'
            })
        }).catch((err)=>{
            console.log(err)
        })
    }



}