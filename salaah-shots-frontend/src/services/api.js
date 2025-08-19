import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'https://saala-shots.onrender.com'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export async function fetchMentors() {
  const { data } = await api.get('api/v1/mentors')
  // Normalize id field
  const normalized = (Array.isArray(data) ? data : data?.data || []).map((m) => ({
    id: m.id || m._id || crypto.randomUUID(),
    name: m.name ?? '',
    specialization: m.specialization ?? m.role ?? '',
    experience: typeof m.experience === 'number' ? m.experience : Number(m.experience || 0),
    location: m.location ?? '',
    available: typeof m.available === 'boolean' ? m.available : String(m.available).toLowerCase() === 'true',
  }))
  return normalized
}
