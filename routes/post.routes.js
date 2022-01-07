
var handlers = require('../handlers/post.handler')
module.exports = function(app){
app.post('/posts',handlers.createPost)
app.patch('/posts/:id',handlers.modifyPost)
app.delete('/posts/:id',handlers.deletePost)
app.get('/posts/:id',handlers.showPost)
app.get('/posts',handlers.showPosts)
}