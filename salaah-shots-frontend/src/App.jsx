import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Mentors from './pages/Mentors'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-px pt-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Mentors />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
