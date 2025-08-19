import pino from 'pino'
const logger = pino({ name: 'api', level: process.env.LOG_LEVEL || 'info' })
export default logger
