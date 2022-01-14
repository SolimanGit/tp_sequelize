const {User, Post} = require("../models")

exports.createUser = async(req,res) => {
    // res.send('ALL users')
    const user = await User.create(req.body)
    .then((response)=>{
        res.send('User created')
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).send({message: "Bad Request"})
    })
}
exports.modifyUser = async(req,res) => {
    // res.send('ALL users')
    const user = await User.update(req.body,{where:{
        id: req.params.id
    }})
    .then((res)=>{
        res.send('User modified')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.deleteUser = async(req,res) => {
    // res.send('ALL users')
    const user = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((res)=>{
        res.send('User deleted')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showUser = async(req,res) => {
    // res.send('ALL users')
    const include = req.query.show_post ? {model: Post} : null
    const user = await User.findOne({
        where: {
            id: req.params.id
        },
        include: include
    })
    .then((res)=>{
        res.send('Show User')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showUsers = async(req,res) => {
    // res.send('ALL users')
    const user = await User.findAll()
    .then((res)=>{
        res.send('Show All')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}



