export default function EmptyState({ title = 'No results', description = 'Try adjusting your filters' }) {
  return (
    <div className="text-center py-16">
      <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600">☝️</div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-gray-500 mt-1">{description}</p>
    </div>
  )
}
