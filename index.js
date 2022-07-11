const express = require('express')

//. Routes
const router = require('./src/routes')

const app = express()

const port = 5000

app.use(express.json())

//. Endpoint Grouping dan Router
app.use('/api/v1/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`))
