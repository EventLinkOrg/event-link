const express = require('express');
const CategoryModel = require('../models/Category');
const router = express.Router();

// CREATE (POST) a Category
router.post('/', async (req, res) => {
    try {console.log(req.body)

      const newCategory = new CategoryModel(req.body);
      await newCategory.save();
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // READ (GET) all Categories
  router.get('/', async (req, res) => {
    try {
      const categories = await CategoryModel.find();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // READ (GET) a specific Category
  router.get('/:id', getCategory, (req, res) => {
    res.json(res.category);
  });
  
  // UPDATE (PUT) a Category
  router.put('/:id', getCategory, async (req, res) => {
    try {
      Object.assign(res.category, req.body);
      await res.category.save();
      res.json(res.category);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE a Category
  router.delete('/:id', getCategory, async (req, res) => {
    try {
      await res.category.remove();
      res.json({ message: 'Category has been deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Middleware function to get a specific Category by ID
  async function getCategory(req, res, next) {
    let category;
    try {
      category = await CategoryModel.findById(req.params.id);
      if (category == null) {
        return res.status(404).json({ message: 'Category not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.category = category;
    next();
  }
  
  module.exports = router;