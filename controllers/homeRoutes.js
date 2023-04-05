const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  Post.findAll({
    attributes: ['id', 'postTitle', 'postContent', 'createdAt'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'userId', 'postId', 'commentContent', 'createdAt'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  }).then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.logged_in,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router;
