require('dotenv-flow').config()
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const websocket = require('./src/connector/websocket')
const producer = require('./src/kafka/producer')
const consumer = require('./src/kafka/consumer')

websocket.init(server, producer, consumer)

server.listen(process.env.PORT)
