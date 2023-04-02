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
  {
    "username": "Aeldreth",
    "password": "japanese"
  },
  {
    "username": "Kira",
    "password": "machinist"
  },
  {
    "username": "Alyssa",
    "password": "snatcher"
  },
  {
    "username": "Cedar",
    "password": "kangaroo"
  },
  {
    "username": "Aura",
    "password": "thailand"
  },
  {
    "username": "Zeiden",
    "password": "samurai"
  },
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser