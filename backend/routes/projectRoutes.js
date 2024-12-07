import express from 'express';
import Project from './models/Project.js';
import { auth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

// Get all projects (public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('user', 'username');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new project (admin only)
router.post('/', adminAuth, async (req, res) => {
  const project = new Project({
    ...req.body,
    user: req.user._id
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project (admin only)
router.patch('/:id', adminAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    Object.assign(project, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

