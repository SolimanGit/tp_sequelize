
var handlers = require('../handlers/user.handler')

module.exports = function(app, Joi, validator){
const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    lien: Joi.string().required(),
    role: Joi.number().required()
})
const usersSchema = Joi.array().items(userSchema)
app.post('/users',validator.body(userSchema),handlers.createUser)
app.patch('/users/:id',validator.body(userSchema),handlers.modifyUser)
app.delete('/users/:id',handlers.deleteUser)
app.get('/users/:id',validator.response(userSchema),handlers.showUser)
app.get('/users',validator.response(usersSchema),handlers.showUsers)
}