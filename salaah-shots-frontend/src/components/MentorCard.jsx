import { motion } from 'framer-motion'

export default function MentorCard({ mentor }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.15 }}
      className="card p-4 flex gap-4"
    >
      <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary-900 text-white flex items-center justify-center font-bold">
        {mentor?.name?.[0]?.toUpperCase() || 'M'}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-primary text-lg font-semibold truncate">{mentor.name}</h3>
        <p className="text-sm text-gray-600">{mentor.specialization} • {mentor.location}</p>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="badge">Experience: {mentor.experience} yrs</span>
          <span className={`badge ${mentor.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {mentor.available ? 'Available' : 'Not Available'}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
