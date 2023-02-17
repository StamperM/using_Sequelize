const router = require('express').Router();
const { Category, Product } = require('../../config/models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
try{
 const categoriesData = await Category.findAll({
  include:[{model:Product}]
 });
 if(!categoriesData){
  res.status(404).json({message: "No Category data"});
  return;
 }
 res.status(200).json(categoriesData);
 }catch (err){
  res.status(500).json(err);
 }


});


router.get('/:id', (req, res) => {
  try{
    const category = await Category.findOne({where:{category_id:req.params.id}})
    if(category ===null){
      console.log("not found");
    }else{
      console.log
    }
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  try{
    const categoryAdd = await Category.create(req.body);
    res.status(200).json(categoryAdd);
  }catch(err){
    res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
