const Brand = require('../models/brandModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.getAllBrands = factory.getAll(Brand);
exports.getBrand = factory.getOne(Brand);
exports.createBrand = factory.createOne(Brand);
exports.updateBrand = factory.updateOne(Brand);
exports.deleteBrand = factory.deleteOne(Brand);
