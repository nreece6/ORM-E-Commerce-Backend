const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagInfo = await Tag.findAll({ include: [{ model: Product}] })
    res.status(200).json(tagInfo)
  }
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {include: [{ model: Product }] })
    if(!tag) {
      res.status(404).json({ message: 'Tag Not Found' })
    }
  } 
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag)
  }
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {where: { id: req.params.id } })
    !updatedTag ? res.status(404).json({ message: 'Tag Not Found'}) : res.status(200).json(updatedTag)
  }
  catch (err) {
    res.status(500).json({message: 'Server Error'})
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy(req.params.id)
    !deletedTag ? res.status(404).json({ message: 'Tag Not Found' }) : res.status(200).json(deletedTag)
    }
    catch (err) {
      res.status(500).json({message: 'Server Error'})
    }
});

module.exports = router;
