import { Router } from 'express'
import { createMentor, listMentors } from '../controllers/mentor.controller.js'
import { validate } from '../middlewares/validate.js'
import { createMentorSchema, listMentorsQuerySchema } from '../validators/mentor.validator.js'

const router = Router()

router.get('/', validate(listMentorsQuerySchema, 'query'), listMentors)
router.post('/', validate(createMentorSchema, 'body'), createMentor)

export default router
