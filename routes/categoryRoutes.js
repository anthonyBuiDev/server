const express = require('express');

const categoryController = require('./../controllers/categoryController');
// const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/categories/')
  .get(categoryController.getAllCategorys)
  .post(categoryController.createCategory);

router
  .route('/categories/:id')
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
