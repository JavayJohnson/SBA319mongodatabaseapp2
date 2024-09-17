
const mongoose = require('mongoose');
const Post = require('../models/Post'); 

const samplePosts = [
  { title: 'Space Odyssey', genre: 'Science Fiction', ageGroup: 'Adults', category: 'Novel', content: 'A journey through space and time.' },
  { title: 'The Little Explorer', genre: 'Adventure', ageGroup: 'Children', category: 'Adventure', content: 'An exciting adventure for kids.' },
  { title: 'Teen Titans', genre: 'Fantasy', ageGroup: 'Teenagers', category: 'Young Adult', content: 'A story about young heroes.' },
  { title: 'Non-Fiction Wonders', genre: 'Educational', ageGroup: 'Adults', category: 'Non-Fiction', content: 'An informative non-fiction read.' },
  { title: 'Mystery at the Mansion', genre: 'Mystery', ageGroup: 'Young Adults', category: 'Novel', content: 'A thrilling mystery novel.' },
  { title: 'Haunted Nights', genre: 'Horror', ageGroup: 'Teenagers', category: 'Novel', content: 'A spooky horror story.' },
  { title: 'Life of a Legend', genre: 'Biography', ageGroup: 'Adults', category: 'Biography', content: 'The biography of a legend.' },
  { title: 'Romantic Escapades', genre: 'Romance', ageGroup: 'Young Adults', category: 'Young Adult', content: 'A tale of romance.' },
  { title: 'Children\'s Mystery Adventure', genre: 'Mystery', ageGroup: 'Children', category: 'Adventure', content: 'A fun mystery for children.' },
  { title: 'Mindfulness Guide', genre: 'Self-Help', ageGroup: 'Adults', category: 'Self-Help', content: 'A guide to mindfulness and self-help.' }
];

async function populatePosts() {
  try {
    await mongoose.connect('mongodb+srv://Javay:Trillionaire1@cluster0.s3wns.mongodb.net/myDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Post.deleteMany({});
    await Post.insertMany(samplePosts);

    console.log('Posts collection populated with sample data');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error populating posts collection:', err);
  }
}

populatePosts();