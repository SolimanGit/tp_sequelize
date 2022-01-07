const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.get('/',async (req,res) => {
    console.log('HELLO WORLD')
})

app.listen(port)