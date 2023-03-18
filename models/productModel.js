const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: true,
    trim: true,
    maxlength: [
      40,
      'A product name must have less or equal then 40 characters'
    ],
    minlength: [3, 'A product name must have more or equal then 3 characters']
  },
  slug: String,
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price']
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function(val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price'
    }
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A product must have a summary']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A product must have a cover image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  stock: {
    type: Number,
    maxLength: [4, 'Stock cannot exceed 4 characters']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brand',
    required: true
  }
});

productSchema.index({ price: 1, ratingsAverage: -1 });
productSchema.index({ slug: 1 });

productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'Product',
  localField: '_id'
});

productSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
