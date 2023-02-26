const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const validateBody = require('../../middlewares');
const { schemas } = require('../../models/contact');
const {
  getAll,
  getById,
  addById,
  deleteById,
  updateById,
  updateFavorite,
} = require('../../controller/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(getAll));

router.get('/:id', ctrlWrapper(getById));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(addById));

router.put('/:id', validateBody(schemas.addSchema), ctrlWrapper(updateById));

router.patch(
  '/:id/favorite',
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

router.delete('/:id', ctrlWrapper(deleteById));

module.exports = router;
