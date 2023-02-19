const { updateContact } = require('../../models/contacts');
const { RequestError } = require('../../helpers/RequestError');

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(result);
};
module.exports = updateById;
