import commentsModel from '../comments/comments-model.js';
import usersModel from '../users/users-model.js';
import * as commentsDao from '../comments/comments-dao.js';

const createComment = async (req, res) => {
  try {
    const comment = req.body;
    const users = usersModel.find();
    const user = (await users).filter(
      (user) => user.username === comment.commenter
    );
    const findUserId = user[0]._id;

    const newComment = {
      ...comment,
      commenter: findUserId,
    };

    const insertedComment = await commentsModel.populate(newComment, {
      path: 'commenter',
    });
    commentsModel.create(insertedComment);
    res.json(insertedComment);
  } catch (err) {
    console.log(err);
  }
};

const findComments = async (req, res) => {
  try {
    const comments = await commentsModel.find({}).populate('commenter');
    res.json(comments);
  } catch (err) {
    console.log(err);
  }
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
  const status = await commentsDao.deleteComment(commentIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post('/api/comments', createComment);
  app.get('/api/comments', findComments);
  app.put('/api/comments/:cid', updateComment);
  app.delete('/api/comments/:cid', deleteComment);
};
