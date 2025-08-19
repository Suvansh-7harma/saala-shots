import 'dotenv/config'
import { connectDB } from '../src/config/db.js'
import { Mentor } from '../src/models/Mentor.js'
import fs from 'fs'
import path from 'path'
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

async function run() {
  await connectDB()
  const raw = fs.readFileSync(path.join(__dirname, 'mentors.json'), 'utf8')
  const data = JSON.parse(raw)
  await Mentor.deleteMany({})
  await Mentor.insertMany(data)
  console.log(`[seed] inserted ${data.length} mentors`)
  process.exit(0)
}

run().catch((err) => {
  console.error('[seed] error:', err)
  process.exit(1)
})
