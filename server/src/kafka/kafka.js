const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'msg',
  brokers: [process.env.KAFKA_BROKER_URL],
})

module.exports = kafka
