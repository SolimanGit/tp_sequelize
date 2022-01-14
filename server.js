const express = require('express')
const bodyParser = require('body-parser')
const Joi = require('Joi')
const validator = require('express-joi-validation').createValidator({})

const app = express()
const port = 3000
require('./routes/user.routes')(app, Joi, validator)
require('./routes/commentaire.routes')(app, Joi, validator)
require('./routes/role.routes')(app,Joi,validator)
require('./routes/post.routes')(app,Joi,validator)


app.get('/',async (req,res) => {
    console.log('HELLO WORLD')
})

app.post('/create', (req,res)=> {

})

app.listen(port)