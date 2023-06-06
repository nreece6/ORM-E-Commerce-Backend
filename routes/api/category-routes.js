const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
  const categories = await Category.findAll({include: [{ model: Product}] })
  res.status(200).json(categories)
  } catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product}] })
  
  if(!category) {
    res.status(404).json({message: 'Category Not Found'})
    return
  }
  res.status(200).json(category)
  } 
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  }
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, { where: {id: req.params.id} })
    !updatedCategory ? res.status(404).json({ message: 'ID Not Found' }) : res.status(200).json(updatedCategory)
  }
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy(req.params.id)
    !deletedCategory ? res.status(404).json({ message: 'ID Not Found' }) : res.status(200).json(deletedCategory)
  }
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

module.exports = router;
