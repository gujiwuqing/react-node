const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
// app.use(bodyParser.json())
const port = 10000
require('./routes/user')(app)
require('./routes/login')(app)
require('./config/mongoose')(app)
app.listen(port, (req, res) => {
    console.log(`http://127.0.0.1:${port}`)
})