const { addContact } = require('../../models/contacts');

const addById = async (req, res, next) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};
module.exports = addById;
