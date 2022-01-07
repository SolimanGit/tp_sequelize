const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
require('./routes/user.routes')(app)


app.get('/',async (req,res) => {
    console.log('HELLO WORLD')
})

app.post('/create', (req,res)=> {

})

app.listen(port)