const { Kafka } = require('kafkajs')

const host = process.env.HOST_IP

const kafka = new Kafka({
  clientId: 'msg',
  brokers: [`${host}:9092`],
})

module.exports = kafka
