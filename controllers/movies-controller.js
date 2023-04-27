import moviesModel from '../movies/movies-model';

const createMovie = async (req, res) => {
  const newMovie = req.body;
  const insertedMovie = await moviesModel.create(newMovie);
  res.json(insertedMovie);
};

const findMovies = async (req, res) => {
  const movies = await moviesModel.find();
  res.json(movies);
};

const findMoviesByMovieId = async (req, res) => {
  const movie = await moviesModel.findById(req.params.mid);
  res.json(movie);
};

const updateMovie = async (req, res) => {
  const movieIdToUpdate = req.params.mid;
  const updates = req.body;
  const status = await moviesModel.updateOne(
    { _id: movieIdToUpdate },
    { $set: updates }
  );
  res.json(status);
};

const deleteMovie = async (req, res) => {
  const movieIdToDelete = req.params.mid;
  const status = await moviesModel.deleteOne({ _id: movieIdToDelete });
  res.json(status);
};

export default (app) => {
  app.post('/api/movies', createMovie);
  app.get('/api/movies', findMovies);
  app.get('/api/movies/:mid', findMoviesByMovieId);
  app.put('/api/movies/:mid', updateMovie);
  app.delete('/api/movies/:mid', deleteMovie);
};
