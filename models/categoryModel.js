const mongoose = require('mongoose'); // Erase if already required
const slugify = require('slugify');
// Declare the Schema of the Mongo model
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: String,
  description: String,
  image: String
});

categorySchema.index({ slug: 1 });

categorySchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
