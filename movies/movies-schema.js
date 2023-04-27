import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
      required: true,
    },
    overview: String,
    release_date: String,
    genre_ids: {
      type: [ObjectId],
      required: true,
      ref: 'genres',
    },
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    vote_average: number,
  },
  { collection: 'movies' }
);

export default moviesSchema;
