const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all users (/api/users)
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    }).then(dbUserData => res.json(dbUserData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET one user (/api/users/id)
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'postTitle', 'postContent', 'createdAt']
            },
            {
                model: Comment,
                attributes: ['id', 'commentContent', 'createdAt'],
                include: {
                    model: Post,
                    attributes: ['postTitle']
                }
            }
        ]
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user associated with this ID. Please try again.'});
            return;
        }res.json(dbUserData)
    })
})