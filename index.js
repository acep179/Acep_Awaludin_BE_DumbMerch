require('dotenv').config()
const express = require('express')
const cors = require('cors')

const http = require('http')
const {Server} = require('socket.io')

//. Routes
const router = require('./src/routes')

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000' // define client origin if both client and server have different origin
    }
})

const port = 5000

app.use(express.json())
app.use(cors());

//. Endpoint Grouping dan Router
app.use('/api/v1/', router)
app.use('/uploads', express.static('uploads'))

server.listen(port, () => console.log(`Listening on port ${port}!`))
