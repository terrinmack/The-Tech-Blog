const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Mushroom extravaganza",
    "postContent": "Today is a great day to eat shiitake mushrooms",
    "userId": 4
  },
  {
    "postTitle": "Clear Day!",
    "postContent": "We cleared p8s today!",
    "userId": 2
  },
  {
    "postTitle": "Where did he go?",
    "postContent": "When will Aura hide in my kangaroo pouch?",
    "userId": 6
  },
  {
    "postTitle": "I think I am thirsty",
    "postContent": "What is your favorite type of milk?",
    "userId": 7
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;