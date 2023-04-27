import mongoose from 'mongoose';
import genresSchema from './genres-schema.js';

const genresModel = mongoose.model('genres', genresSchema);

export default genresModel;
