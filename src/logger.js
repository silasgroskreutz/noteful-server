// this is to set up Winson - the logger in checkpoint 10 - 6 levels of logs possible
//exported out - use find "Consider the following dependency graph" for reasoning

const winston = require('winston')
const { NODE_ENV } = require('./config')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
})

if (NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

module.exports = logger