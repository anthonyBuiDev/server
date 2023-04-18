const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/users/signup', authController.signup);
router.post('/users/login', authController.login);
router.get('/users/logout', authController.logout);

router.post('/users/forgotPassword', authController.forgotPassword);
router.patch('/users/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
// router.use(authController.protect);

router.patch('/users/updateMyPassword', authController.updatePassword);
router.get('/users/me', userController.getMe, userController.getUser);
router.patch(
  '/users/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete('/users/deleteMe', userController.deleteMe);

// router.use(authController.restrictTo('admin'));

router
  .route('/users/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/users/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
