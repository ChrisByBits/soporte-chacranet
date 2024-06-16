import mongoose from 'mongoose';

const surveySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
  });

export default mongoose.model('Survey', surveySchema);