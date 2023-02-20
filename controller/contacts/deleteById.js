const { removeContact } = require('../../models/contacts.js');
const { RequestError } = require('../../helpers/RequestError');

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await removeContact(id, req.body);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(204).send(result);
};
module.exports = deleteById;
