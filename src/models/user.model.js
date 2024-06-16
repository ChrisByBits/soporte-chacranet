import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email : {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    address : {
      type: String,
      required: true,
      trim: true
    },
    role : {
      type: String,
      required: true,
      trim: true
    }
  });

export default mongoose.model('User', userSchema);