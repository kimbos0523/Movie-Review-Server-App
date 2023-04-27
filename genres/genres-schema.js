import mongoose from 'mongoose';

const genresSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    movies: {
      type: [String],
      required: true,
    },
  },
  { collection: 'genres' }
);

export default genresSchema;
