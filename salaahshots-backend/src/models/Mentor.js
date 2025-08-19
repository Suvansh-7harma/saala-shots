import mongoose from 'mongoose'

const MentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    specialization: { type: String, required: true, trim: true },
    experience: { type: Number, required: true, min: 0 },
    location: { type: String, required: true, trim: true },
    available: { type: Boolean, default: true }
  },
  { timestamps: true }
)

// expose id (string) instead of _id
MentorSchema.virtual('id').get(function () {
  return this._id.toHexString()
})
MentorSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id
  }
})

export const Mentor = mongoose.model('Mentor', MentorSchema)
