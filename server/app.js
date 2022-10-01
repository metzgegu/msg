
const express = require('express')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const producer = require('./src/producer')
const consume = require('./src/consumer')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);
  producer.connect()
  
  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });

  socket.on("sendMessage", (message) => {
    producer.sendMessage(message)
  })

  consume(async ({ message }) => {
    io.emit("dispatchMessage", `${message.value}`)
  })
});

server.listen(3000);
