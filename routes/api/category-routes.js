const router = require('express').Router();
const { Category, Product } = require('../../models');



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


router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catData= await Category.findByPk(req.params.id, {
      include: [{model:Product}],
    });
    if (!catData) {
      res.status(404).json({ message: "There is no tag info." });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  


router.post('/', async(req, res) => {
  try{
    const categoryAdd = await Category.create(req.body);
    res.status(200).json(categoryAdd);
  }catch(err){
    res.status(400).json(err)
  }
});


router.put("/:id", async(req,res)=>{

  try{
    const catDat = await Category.update({
      category_name: req.body.category_name
    }, 
    {
    where:{
      id:req.params.id
    }
  })
  res.status(200).json(catDat)
    
  }catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  console.log(req.params.id)
  try{
    const catDelete = await Category.destroy({
      where:{id:req.params.id}
    });
    console.log(catDelete);
    if(!catDelete){
      res.status(400).json({message:"Can not find Category to delete"})
    }
    res.status(200).json({message:"Has been deleted"});
  }catch(err){
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
