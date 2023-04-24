import commentsModel from './comments-model.js';

export const findAllComments = () => commentsModel.find();

export const findCommentsById = (cid) => commentsModel.findById(cid);

export const findCommentsByMovieId = (mid) => {
  commentsModel.find({});
};

export const createComment = (comment) => commentsModel.create(comment);

export const updateComment = (cid, comment) =>
  commentsModel.updateOne({ _id: cid }, comment);

export const deleteComment = (cid) => commentsModel.deleteOne({ _id: cid });
