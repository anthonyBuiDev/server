const Order = require('../models/orderModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.getAllOrders = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.createOrder = factory.createOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
