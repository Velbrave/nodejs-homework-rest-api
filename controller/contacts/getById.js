const { getContactById } = require('../../models/contacts');
const { RequestError } = require('../../helpers/RequestError');

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json(result);
};
module.exports = getById;
