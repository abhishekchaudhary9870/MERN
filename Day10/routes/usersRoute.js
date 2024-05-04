const express = require('express')
const usersController = require('../controllers/usersController.js')
const userRouter = express.Router()
userRouter.route('/')
.get(usersController.getUser)
.put(usersController.replaceUser)
.post(usersController.addUser)
.delete(usersController.deleteUser);


module.exports = userRouter;