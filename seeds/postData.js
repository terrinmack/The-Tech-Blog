const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Mushroom Day",
    "postContent": "Today is a great day to eat shiitake mushrooms",
    "userId": 1
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;