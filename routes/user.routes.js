
var handlers = require('../handlers/user.handler')
module.exports = function(app){
app.post('/users',handlers.createUser)
app.patch('/users/:id',handlers.modifyUser)
app.delete('/users/:id',handlers.deleteUser)
app.get('/users/:id',handlers.showUser)
app.get('/users',handlers.showUsers)
}