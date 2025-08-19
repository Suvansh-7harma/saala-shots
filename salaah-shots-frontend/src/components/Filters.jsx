import { useCallback } from 'react'
import { debounce } from '../utils/helpers'

export default function Filters({ filters, setFilters, options }) {
  const debouncedSearch = useCallback(
    debounce((v) => setFilters((s) => ({ ...s, search: v })), 300),
    [setFilters]
  )

  return (
    <div className="card p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <input
          type="text"
          className="input"
          placeholder="Search name, specialization, location…"
          defaultValue={filters.search}
          onChange={(e) => debouncedSearch(e.target.value)}
        />
        <select
          className="select"
          value={filters.specialization}
          onChange={(e) => setFilters((s) => ({ ...s, specialization: e.target.value }))}
        >
          <option value="all">All Specializations</option>
          {options.specializations.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          className="select"
          value={filters.location}
          onChange={(e) => setFilters((s) => ({ ...s, location: e.target.value }))}
        >
          <option value="all">All Locations</option>
          {options.locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <label htmlFor="exp" className="text-sm text-gray-600 whitespace-nowrap">Min Exp</label>
          <input
            id="exp"
            type="range"
            min={0}
            max={options.maxExperience || 20}
            value={filters.minExperience}
            onChange={(e) => setFilters((s) => ({ ...s, minExperience: Number(e.target.value) }))}
            className="w-full"
          />
          <div className="badge">{filters.minExperience}+ yrs</div>
        </div>
        <select
          className="select"
          value={filters.availability}
          onChange={(e) => setFilters((s) => ({ ...s, availability: e.target.value }))}
        >
          <option value="all">Any Availability</option>
          <option value="yes">Available</option>
          <option value="no">Not Available</option>
        </select>
      </div>
    </div>
  )
}
