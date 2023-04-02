const { Comment } = require('../models');

const commentdata =
[
  {
    "userId": 5,
    "postId": 1,
    "commentContent": "How many mushrooms did you buy?"
  },
  {
    "userId": 1,
    "postId": 2,
    "commentContent": "Yay!!"
  },
  
];

const seedComment = () => Post.bulkCreate(commentdata);

module.exports = seedComment;