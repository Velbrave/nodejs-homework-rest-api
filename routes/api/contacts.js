const express = require('express');
const { ctrlWrapper } = require('../../helpers/index');
const validateBody = require('../../middlewares/validateBody');
const addSchema = require('../../schema/contact');
const {
  getAll,
  getById,
  addById,
  deleteById,
  updateById,
} = require('../../controller/contacts/index');

const router = express.Router();

router.get('/', ctrlWrapper(getAll));

router.get('/:id', ctrlWrapper(getById));

router.post('/', validateBody(addSchema), ctrlWrapper(addById));

router.delete('/:id', ctrlWrapper(deleteById));

router.put('/:id', validateBody(addSchema), ctrlWrapper(updateById));

module.exports = router;
