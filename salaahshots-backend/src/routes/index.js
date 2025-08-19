import { Router } from 'express'
import mentorRoutes from './mentor.routes.js'

const router = Router()

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() })
})

router.use('/mentors', mentorRoutes)

export default router
