import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Please provide your user name'],
    },
    password: {
      type: String,
      required: [true, 'Please provide your password'],
      minlength: 8,
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      lowercase: true,
    },
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'user', 'guest'],
    },
    // favorites: {
    //   type: [String],
    //   default: [],
    // },
  },
  { collection: 'users' }
);

export default usersSchema;
