require('dotenv').config()
const express = require('express')
const cors = require('cors')

//. Routes
const router = require('./src/routes')

const app = express()

const port = 5000

app.use(express.json())
app.use(cors());

//. Endpoint Grouping dan Router
app.use('/api/v1/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`))
