import { useEffect, useMemo, useState } from 'react'
import { fetchMentors } from '../services/api'
import { uniqueSorted } from '../utils/helpers'

export default function useMentors() {
  const [raw, setRaw] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [filters, setFilters] = useState({
    search: '',
    specialization: 'all',
    location: 'all',
    minExperience: 0,
    availability: 'all', // all | yes | no
  })

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchMentors()
      .then((data) => {
        if (mounted) {
          setRaw(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (mounted) setError(err?.message || 'Failed to fetch mentors')
      })
      .finally(() => mounted && setLoading(false))
    return () => (mounted = false)
  }, [])

  const options = useMemo(() => {
    return {
      specializations: uniqueSorted(raw.map((m) => m.specialization)),
      locations: uniqueSorted(raw.map((m) => m.location)),
      maxExperience: Math.max(0, ...raw.map((m) => m.experience || 0))
    }
  }, [raw])

  const filtered = useMemo(() => {
    const s = filters.search.trim().toLowerCase()
    return raw.filter((m) => {
      const matchesText = !s || [m.name, m.specialization, m.location].join(' ').toLowerCase().includes(s)
      const matchesSpec = filters.specialization === 'all' || m.specialization === filters.specialization
      const matchesLoc = filters.location === 'all' || m.location === filters.location
      const matchesExp = (m.experience || 0) >= Number(filters.minExperience || 0)
      const matchesAvail = filters.availability === 'all' ||
        (filters.availability === 'yes' ? m.available === true : m.available === false)
      return matchesText && matchesSpec && matchesLoc && matchesExp && matchesAvail
    })
  }, [raw, filters])

  return {
    data: filtered,
    loading,
    error,
    filters,
    setFilters,
    options
  }
}
