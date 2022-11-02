const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:[Product]})
  .then(categoryDataBase => res.json(categoryDataBase)).catch(err => res.json(err))
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:{id:req.params.id},
    include:[Product]
  }).then(categoryDataBase => res.json(categoryDataBase)).catch(err => res.json(err))
});

router.post('/', async (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(categoryDataBase => res.json(categoryDataBase))
  .catch(err=> res.json(err))
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(res.body, {
    where:{
      id:req.params.id
    }
  }).then(categoryDataBase => res.json(categoryDataBase))
  .catch(err => res.json(err))
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  }).then(categoryDataBase => res.json(categoryDataBase))
  .catch(err => res.json(err))
});

module.exports = router;
