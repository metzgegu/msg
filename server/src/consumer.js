const kafka = require('./kafka')

const topic = 'message'
const consumer = kafka.consumer({ groupId: 'messageConsumer' })

const consume = async (callbackEachMessage) => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: callbackEachMessage,
  })
}

module.exports = consume
