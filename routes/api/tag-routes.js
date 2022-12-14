const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include:[{model:Product,through:ProductTag}]})
  .then(tagDataBase => res.json(tagDataBase))
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({include:[{model:Product,through: ProductTag}],
    where:{id:req.params.id}}).
     then(tagDataBase => res.json(tagDataBase))
});

router.post('/', async (req, res) => {
  // create a new tag
  Tag.create(req.body).then(tagDataBase => res.json(tagDataBase))
  
}); 

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{where:{id:req.params.id}}).then(tagDataBase => res.json(tagDataBase))
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id}}).then(tagDataBase=>res.json(tagDataBase))
});

module.exports = router;
