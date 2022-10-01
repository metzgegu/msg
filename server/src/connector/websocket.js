const { Server } = require('socket.io')

const init = (server, producer, consumer) => {
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log(`connect ${socket.id}`)
    producer.connect()

    socket.on('disconnect', (reason) => {
      console.log(`disconnect ${socket.id} due to ${reason}`)
    })

    socket.on('sendMessage', (message) => {
      producer.sendMessage(message)
    })
  })

  consumer.consume(async ({ message }) => {
    io.emit('dispatchMessage', `${message.value}`)
  })
}

module.exports = { init }
