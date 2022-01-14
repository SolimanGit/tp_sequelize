const {Post, Comment} = require("../models")

exports.createPost = async(req,res) => {
    // res.send('ALL Posts')
    Post.create(req.body)
    .then((response)=>{
        res.send('Post created')
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).send({message: "Bad Request"})
    })
}
exports.modifyPost = async(req,res) => {
    // res.send('ALL Posts')
    const post = await Post.update(req.body,{where:{
        id: req.params.id
    }})
    .then((res)=>{
        res.send('Post modified')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.deletePost = async(req,res) => {
    // res.send('ALL Posts')
    const post = await Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((res)=>{
        res.send('Post deleted')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showPost = async(req,res) => {
    // res.send('ALL Posts')
    const include = req.query.show_com ? {model: Comment} : null
    const post = await Post.findOne({
        where: {
            id: req.params.id
        },
        include: include
    })
    .then((res)=>{
        res.send('Show Post')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}
exports.showPosts = async(req,res) => {
    // res.send('ALL Posts')
    const post = await Post.findAll()
    .then((res)=>{
        res.send('Show All')
    })
    .catch((err)=>{
        res.status(400).send({message: "Bad Request"})
    })
}



