const { Comment } = require('../models');

const commentdata =
[
  {
    "userId": 2,
    "postId": 1,
    "commentContent": "I just learned about this in my class!"
  },
];

const seedComment = () => Post.bulkCreate(commentdata);

module.exports = seedComment;