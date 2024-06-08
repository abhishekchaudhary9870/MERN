<<<<<<< HEAD
const express = require('express')
const usersController = require('../controllers/usersController.js')
const userRouter = express.Router()
userRouter.route('/')
.get(usersController.getUser)
.put(usersController.replaceUser)
.post(usersController.addUser)
.delete(usersController.deleteUser);


=======
const express = require('express')
const usersController = require('../controllers/usersController.js')
const userRouter = express.Router()
userRouter.route('/')
.get(usersController.getUser)
.put(usersController.replaceUser)
.post(usersController.addUser)
.delete(usersController.deleteUser);


>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
module.exports = userRouter;