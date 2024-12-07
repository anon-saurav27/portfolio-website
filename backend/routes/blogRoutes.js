import express from 'express';
import Blog from '../models/Blog.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all blog posts (public)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blog post (authenticated users)
router.post('/', auth, async (req, res) => {
  const blog = new Blog({
    ...req.body,
    author: req.user._id
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a blog post (post owner only)
router.patch('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found or you do not have permission' });
    }
    Object.assign(blog, req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog post (post owner only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id, author: req.user._id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found or you do not have permission' });
    }
    res.json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

