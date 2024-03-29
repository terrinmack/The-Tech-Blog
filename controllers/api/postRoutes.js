const router = require('express').Router();
const { User, Post,  Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User, attributes: ['name'] }, {model: Comment, attributes: ['content'], order: [['id', 'ASC']] }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User, attributes: ['name'] }, {model: Comment, attributes: ['content'], order: [['id', 'ASC']] }],
      });
      if (!postData) {
        res.status(404).json({ message: 'No Post found with that id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;