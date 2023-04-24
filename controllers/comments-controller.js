import commentsModel from '../comments/comments-model.js';

const createComment = async (req, res) => {
  const newComment = req.body;

  const insertedComment = await commentsModel.create(newComment);
  res.json(insertedComment);
};

const findComments = async (req, res) => {
  const comments = await commentsModel.find();
  res.json(comments);
};

const updateComment = async (req, res) => {
  const commentIdToUpdate = req.params.cid;
  const updates = req.body;
  const status = await commentsModel.updateOne(
    { _id: commentIdToUpdate },
    { $set: updates }
  );
  res.json(status);
};

const deleteComment = async (req, res) => {
  const commentIdToDelete = req.params.cid;
  const status = await usersModel.deleteOne(commentIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post('/api/comments', createComment);
  app.get('/api/comments', findComments);
  app.put('/api/comments/:cid', updateComment);
  app.delete('/api/comments/:cid', deleteComment);
};
