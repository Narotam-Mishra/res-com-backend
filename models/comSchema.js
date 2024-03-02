const mongoose = require("mongoose");

// Define Schema and Model for your MongoDB collection
const componentSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ResComponent', componentSchema);
