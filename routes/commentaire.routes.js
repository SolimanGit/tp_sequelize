
var handlers = require('../handlers/commentaire.handler')
module.exports = function(app){
app.post('/comments',handlers.createCommentaire)
app.patch('/comments/:id',handlers.modifyCommentaire)
app.delete('/comments/:id',handlers.deleteCommentaire)
app.get('/comments/:id',handlers.showCommentaire)
app.get('/comments',handlers.showCommentaires)
}