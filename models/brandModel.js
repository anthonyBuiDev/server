const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const bandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
