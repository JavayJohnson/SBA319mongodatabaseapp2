
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  content: { type: String, required: true },
  genre: { type: String },
  ageGroup: { type: String },
  category: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Post', postSchema);
