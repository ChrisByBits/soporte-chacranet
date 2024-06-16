import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    image: {
      data: Buffer,
      contentType: String
    },
    video: {
      data: Buffer,
      contentType: String,
    } 
  });

export default mongoose.model('Message', messageSchema);