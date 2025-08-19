import { AnimatePresence, motion } from 'framer-motion'
import useMentors from '../hooks/useMentors'
import MentorCard from '../components/MentorCard'
import Loader from '../components/Loader'
import EmptyState from '../components/EmptyState'
import Filters from '../components/Filters'

export default function Mentors() {
  const { data, loading, error, filters, setFilters, options } = useMentors()

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Find Mentors</h2>
          <p className="text-gray-500 text-sm">Browse mentors and filter by specialization, location, experience and availability.</p>
        </div>
        <button
          onClick={() => setFilters({ search: '', specialization: 'all', location: 'all', minExperience: 0, availability: 'all' })}
          className="btn bg-gray-100 hover:bg-gray-200"
        >
          Reset Filters
        </button>
      </div>

      <Filters filters={filters} setFilters={setFilters} options={options} />

      {loading && <Loader />}
      {error && (
        <div className="card p-4 text-red-700 bg-red-50 border border-red-100">
          <p className="font-medium">Failed to load mentors</p>
          <p className="text-sm">{String(error)}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {data.length === 0 ? (
            <EmptyState title="No mentors match your filters" description="Try broadening your search criteria." />
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence>
                {data.map((m) => (
                  <MentorCard key={m.id} mentor={m} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </>
      )}
    </section>
  )
}
