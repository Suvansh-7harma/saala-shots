import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import routes from './routes/index.js'
import { notFound, errorHandler } from './middlewares/error.js'

const app = express()

// Security
app.use(helmet())

// CORS
const allowed = (process.env.ALLOWED_ORIGINS || '*')
const corsOptions = {
  origin: function (origin, cb) {
    if (!origin || allowed === '*') return cb(null, true)
    const whitelist = allowed.split(',').map(s => s.trim())
    if (whitelist.includes(origin)) return cb(null, true)
    cb(new Error('Not allowed by CORS'))
  },
  credentials: true
}
app.use(cors(corsOptions))

// Logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

// Body parsing
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: false }))

// Basic rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120 // 120 req/min per IP
})
app.use(limiter)

// Routes
app.use('/api/v1', routes)

// 404 + Error
app.use(notFound)
app.use(errorHandler)

export default app
