// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Javay:Trillionaire1@cluster0.s3wns.mongodb.net/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
