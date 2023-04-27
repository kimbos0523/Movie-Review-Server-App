import genresModel from '../genres/genres-model';

const createGenre = async (req, res) => {
  const newGenre = req.body;
  const insertedGenre = await genresModel.create(newGenre);
  res.json(insertedGenre);
};

const findGenres = async (req, res) => {
  const genres = await genresModel.find();
  res.json(genres);
};

const findGenresByGenreId = async (req, res) => {
  const genre = await genresModel.findById(req.params.gid);
  res.json(genre);
};

const updateGenre = async (req, res) => {
  const genreIdToUpdate = req.params.gid;
  const updates = req.body;
  const status = await genresModel.updateOne(
    { _id: genreIdToUpdate },
    { $set: updates }
  );
  res.json(status);
};

const deleteGenre = async (req, res) => {
  const genreIdToDelete = req.params.gid;
  const status = await genresModel.deleteOne({ _id: genreIdToDelete });
  res.json(status);
};

export default (app) => {
  app.post('/api/genres', createGenre);
  app.get('/api/genres', findGenres);
  app.get('/api/genres/:gid', findGenresByGenreId);
  app.put('/api/genres/:gid', updateGenre);
  app.delete('/api/genres/:gid', deleteGenre);
};
