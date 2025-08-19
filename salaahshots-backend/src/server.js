import 'dotenv/config'
import app from './app.js'
import { connectDB } from './config/db.js'

const PORT = process.env.PORT || 8080

async function bootstrap() {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`)
  })
}

bootstrap().catch((err) => {
  console.error('[server] fatal:', err)
  process.exit(1)
})
