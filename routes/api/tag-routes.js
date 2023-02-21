const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model:Product}],
    });
    if (!tagData) {
      res.status(404).json({ message: "There is no tag info." });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

// router.put('/:id', async(req, res) => {
//   try{
//     const updatedTag = await Tag.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((tag) => {
//         // find all associated tags from ProductTag
//         return Tag.findAll({ where: {name: req.body.name } });
//       })
//       .then((productTags) => {
//         // get list of current tag_ids
//         const productTagIds = productTags.map(({ tag_id }) => tag_id);
//         // create filtered list of new tag_ids
//         const newProductTags = req.body.tagIds
//           .filter((tag_id) => !productTagIds.includes(tag_id))
//           .map((tag_id) => {
//             return {
//               product_id: req.params.id,
//               tag_id,
//             };
//           });
//         // figure out which ones to remove
//         const productTagsToRemove = productTags
//           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//           .map(({ id }) => id);

//         // run both actions
//         return Promise.all([
//           ProductTag.destroy({ where: { id: productTagsToRemove } }),
//           ProductTag.bulkCreate(newProductTags),
//         ]);
//       })
//       .then((updatedProductTags) => res.json(updatedProductTags))
//       .catch((err) => {
//         // console.log(err);
//         res.status(400).json(err);
//       });
//   });
//   // update a tag's name by its `id` value
// });

router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagDat) {
      res.status(400).json({ message: "Not a valid id." });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
