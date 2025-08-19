import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container-px py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold">S</div>
          <div>
            <h1 className="text-lg font-semibold text-primary">Salaah Shots</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Mentors & Professionals</p>
          </div>
        </motion.div>
        <a
          href="https://salaahshots.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary text-sm"
        >
          Visit Main Site
        </a>
      </div>
    </header>
  )
}
