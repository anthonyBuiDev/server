const express = require('express');

const brandController = require('../controllers/brandController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);
// router.use(authController.restrictTo('admin'));

router
  .route('/brands/')
  .get(brandController.getAllBrands)
  .post(brandController.createBrand);

router
  .route('/brands/:id')
  .get(brandController.getBrand)
  .patch(brandController.updateBrand)
  .delete(brandController.deleteBrand);

module.exports = router;
