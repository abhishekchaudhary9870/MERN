const express = require('express');
const reviewsController = require('../controllers/reviewsController.js')
const reviewRouter = express.Router();

reviewRouter.route('/:id')
.post(reviewsController.addReview)
.get(reviewsController.getReview)
.put(reviewsController.editReview)
.delete(reviewsController.deleteReview)
module.exports = reviewRouter;
