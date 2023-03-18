const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

router.use('/products/:ProductId/reviews', reviewRouter);

router
  .route('/products/')
  .get(productController.getAllProducts)
  .post(
    // authController.protect,
    // authController.restrictTo('admin', 'staff'),
    productController.createProduct
  );

router
  .route('/products/:id')
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'staff'),
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'staff'),
    productController.deleteProduct
  );

module.exports = router;
