const express = require('express')
const app = express()
var api = require('./routes/api')
var bodyParser = require('body-parser')
var cors = require('cors');
require('dotenv').config()
require('./database')
app.use(cors());
app.use(bodyParser.json())

const PORT = process.env.PORT

app.use('/api/employee', api)

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})
