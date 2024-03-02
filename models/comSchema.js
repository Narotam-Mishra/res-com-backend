
const mongoose = require("mongoose");

// Define Schema and Model for your MongoDB collection
const componentSchema = new mongoose.Schema({
  data: String,
});


module.exports = mongoose.model('ResComponent', componentSchema);
