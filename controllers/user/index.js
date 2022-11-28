const USERS = require('../../models/users')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const KEY  = "ndjcncdwmxsw:jndsinwedi"

module.exports = {
    getAllUser: async (req, res) => {
        const data = await USERS.find({}, "-__v")
        res.json({
            Message: "Succses Get data user",
            data
        })
    },
    getUserById: async (req, res) => {
        const { id } = req.params
        const data = await USERS.findById(id)
        res.json({
            Message: "Succses Get data user by id",
            data
        })
    },
    postUser: async (req, res) => {
        const userBody = req.body
        const saltRounds = 10
        const hash = bcrypt.hashSync(userBody.pass, saltRounds)
        userBody.pass = hash



        const data = new USERS(userBody)
        data.save()
        res.json({
            Message: "Succses Get data user by id",
            data
        })
    },
    Login: async (req, res) => {
        const user = req.body
        const findUser = await USERS.findOne({ email: user.email })
        if (findUser != null) {
            const check = bcrypt.compareSync(user.pass, findUser.pass)

            if (check) {
                const dataToken = {
                    id : findUser.id,
                    role : findUser.role
                }
                const token = jwt.sign(dataToken,KEY,{expiresIn : "1d"})
                res.json({
                    Message: "data ketemu dan berhasil login",
                    data: findUser,
                    token: token
                })
            } else {
                res.json({
                    Message: "data tidak ketemu"
                })
            }
        }else{
            res.json({
                Message: "data tidak ketemu"
            })
        }

    },
    updateUser : async (req,res) => {
        const {id} = req.params
        const dataNew = req.body
        const data = await USERS.findByIdAndUpdate(id,dataNew)
        data.save()
        res.json({
            mess : "succes update data",
            data
        })
    },
    getUserByName : async (req,res) =>{
        const quer = req.query.name
        const data = await USERS.find({name : {$regex: quer , $options: 'i'}})
        res.json({
            Message : "Succses Get data event name",
           data
        })
    },
    deleteUser : async (req,res) =>{
        const {id} = req.params
        await USERS.findByIdAndDelete(id).then(()=>{
            res.json({
                mess : 'berhasil hapus user'
            })
        }).catch((err)=>{
            console.log(err)
        })
    }


}