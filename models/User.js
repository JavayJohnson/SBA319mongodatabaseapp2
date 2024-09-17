
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, index: true }, // Adding index for frequently queried fields
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
