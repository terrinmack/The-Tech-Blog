const { User } = require('../models');

const userdata =
[
  {
    "username": "Eishi",
    "password": "password"
  },
  {
    "username": "Pyrrha",
    "password": "stampede"
  },
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser