import usersModel from '../users/users-model.js';

const createUser = async (req, res) => {
  const newUser = req.body;
  const insertedUser = await usersModel.create(newUser);
  res.json(insertedUser);
};

const findUsers = async (req, res) => {
  const users = await usersModel.find();
  res.json(users);
};

const findUsersByUserId = async (req, res) => {
  const user = await usersModel.findById(req.params.uid);
  res.json(user);
};

const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  const status = await usersModel.updateOne(
    { _id: userIdToUpdate },
    { $set: updates }
  );
  res.json(status);
};

const deleteUser = async (req, res) => {
  const userIdToDelete = req.params.uid;
  const status = await usersModel.deleteOne({ _id: userIdToDelete });
  res.json(status);
};

export default (app) => {
  app.post('/api/users', createUser);
  app.get('/api/users', findUsers);
  app.get('/api/users/:uid', findUsersByUserId);
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
};
