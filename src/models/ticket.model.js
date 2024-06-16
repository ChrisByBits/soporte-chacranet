import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema(
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
    status: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  });

export default mongoose.model('Ticket', ticketSchema);