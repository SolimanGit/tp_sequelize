
var handlers = require('../handlers/role.handler')
module.exports = function(app){
app.post('/roles',handlers.createRole)
app.patch('/roles/:id',handlers.modifyRole)
app.delete('/roles/:id',handlers.deleteRole)
app.get('/roles/:id',handlers.showRole)
app.get('/roles',handlers.showRoles)
}