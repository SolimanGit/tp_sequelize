const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
require('./routes/user.routes')(app)
require('./routes/commentaire.routes')(app)
require('./routes/role.routes')(app)
require('./routes/post.routes')(app)


app.get('/',async (req,res) => {
    console.log('HELLO WORLD')
})

app.post('/create', (req,res)=> {

})

app.listen(port)