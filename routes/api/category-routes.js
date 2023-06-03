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
    res.status(404).json({message: 'ID Not Found'})
    return
  }
  res.status(200).json(category)
  } 
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
