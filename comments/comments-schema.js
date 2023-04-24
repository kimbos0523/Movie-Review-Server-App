import mongoose, { Schema } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

const commentsSchema = new mongoose.Schema(
  {
    commenter: {
      type: ObjectId,
      required: true,
      ref: 'users',
    },
    movie: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'comments' }
);

export default commentsSchema;
