const express = require('express');

const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

// router.get('/checkout-session/:tourId', orderController.getCheckoutSession);

router.use(authController.restrictTo('admin'));

router
  .route('/orders/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router
  .route('/orders/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
