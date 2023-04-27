import moviesModel from './movies-model.js';

export const findAllMovies = () => moviesModel.find();

export const findMovieById = (mid) => moviesModel.findById(mid);

export const createMovie = (movie) => moviesModel.create(movie);

export const updateMovie = (mid, movie) =>
  moviesModel.updateOne({ _id: mid }, movie);

export const deleteMovie = (mid) => moviesModel.deleteOne({ _id: mid });
