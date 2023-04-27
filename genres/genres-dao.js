import genresModel from './genres-model.js';

export const findAllGenres = () => genresModel.find();

export const findGenreById = (mid) => genresModel.findById(mid);

export const createGenre = (genre) => genresModel.create(genre);

export const updateGenre = (mid, genre) =>
  genresModel.updateOne({ _id: mid }, genre);

export const deleteGenre = (mid) => genresModel.deleteOne({ _id: mid });
