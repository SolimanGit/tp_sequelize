
var handlers = require('../handlers/post.handler')
const Joi = require('joi')
module.exports = function(app, Joi, validator){
const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.string().isoDate().required(),
    author: Joi.string().required(),
})
const postsSchema = Joi.array().items(postSchema)

const queryStringPost = Joi.object({id:Joi.number().integer().required()})

//* PARAMS au lieu de QUERY car les id sont avec des params dans nos routes mais c'est la même syntaxe avec des query
app.post('/posts',handlers.createPost)
app.patch('/posts/:id',validator.body(postSchema), validator.params(queryStringPost),handlers.modifyPost)
app.delete('/posts/:id',validator.params(queryStringPost),handlers.deletePost)
app.get('/posts/:id',validator.body(postSchema),validator.params(queryStringPost),handlers.showPost)
app.get('/posts',validator.body(postsSchema),handlers.showPosts)
}