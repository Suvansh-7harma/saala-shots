import { z } from 'zod'

export const createMentorSchema = z.object({
  name: z.string().min(2).max(100),
  specialization: z.string().min(2).max(100),
  experience: z.number().int().min(0).max(80),
  location: z.string().min(2).max(100),
  available: z.boolean().optional()
})

export const listMentorsQuerySchema = z.object({
  specialization: z.string().optional(),
  location: z.string().optional(),
  available: z
    .enum(['true', 'false'])
    .transform((v) => v === 'true')
    .optional(),
  minExperience: z.coerce.number().int().min(0).optional(),
  maxExperience: z.coerce.number().int().min(0).optional(),
  page: z.coerce.number().int().min(1).default(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(10).optional(),
  sort: z.string().optional()
})
