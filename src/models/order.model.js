import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user_id: {
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
    products: {
      type: Array,
      required: true
    },
});

export default mongoose.model('Order', orderSchema);