const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const {
  getAll,
  getById,
  addById,
  deleteById,
  updateById,
  updateFavorite,
  getAllPaginate,
  getAllFavorite,
} = require('../../controller/contacts');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(getAll));

router.get('/', authenticate, ctrlWrapper(getAllPaginate));

router.get('/', authenticate, ctrlWrapper(getAllFavorite));

router.get('/:id', authenticate, ctrlWrapper(getById));

router.post('/', authenticate, validateBody(schemas.addSchema), ctrlWrapper(addById));

router.put('/:id', authenticate, validateBody(schemas.addSchema), ctrlWrapper(updateById));

router.patch(
  '/:id/favorite',
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

router.delete('/:id', ctrlWrapper(deleteById));

module.exports = router;
