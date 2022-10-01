const kafka = require('./kafka')

const producer = kafka.producer()
const topic = process.env.KAFKA_TOPIC

const connect = async () => {
  await producer.connect()
}

const disconnect = async () => {
  await producer.disconnect()
}

const sendMessage = (message) => {
  return producer
    .send({
      topic,
      messages: [{ value: message }],
    })
    .catch((e) => console.error(`[example/producer] ${e.message}`, e))
}

module.exports = {
  connect,
  disconnect,
  sendMessage,
}
