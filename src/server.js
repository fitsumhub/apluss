// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/admin_panel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB Schema
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const PostModel = mongoose.model('Post', PostSchema);

// API Endpoints
// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new post
app.post('/api/posts', validatePost, async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new PostModel({ title, content });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update post
app.put('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // This option returns the updated document
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example validation middleware for creating posts
const validatePost = [
  check('title').notEmpty().withMessage('Title is required'),
  check('content').notEmpty().withMessage('Content is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
PORT=3003;

const express = require('express');

const app = express();
