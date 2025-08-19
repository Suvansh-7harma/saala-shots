import { Mentor } from '../models/Mentor.js'

export async function createMentor(req, res) {
  const doc = await Mentor.create(req.body)
  res.status(201).json({ data: doc })
}

export async function listMentors(req, res) {
  const {
    specialization,
    location,
    available,
    minExperience,
    maxExperience,
    page = 1,
    limit = 10,
    sort
  } = req.query

  const filter = {}
  if (specialization) filter.specialization = specialization
  if (location) filter.location = location
  if (available !== undefined) filter.available = available
  if (minExperience !== undefined || maxExperience !== undefined) {
    filter.experience = {}
    if (minExperience !== undefined) filter.experience.$gte = Number(minExperience)
    if (maxExperience !== undefined) filter.experience.$lte = Number(maxExperience)
  }

  const skip = (Number(page) - 1) * Number(limit)
  let query = Mentor.find(filter).skip(skip).limit(Number(limit))

  if (sort) {
    // e.g. 'experience,-name'
    const fields = sort.split(',').join(' ')
    query = query.sort(fields)
  } else {
    query = query.sort('-createdAt')
  }

  const [items, total] = await Promise.all([query.exec(), Mentor.countDocuments(filter)])
  res.json({
    data: items,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(total / Number(limit))
    }
  })
}
