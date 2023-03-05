const { Contact } = require('../../models/contact');
const paginate = require('mongoose-paginate-v2');

const getAllPaginate = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const options = {
    page,
    limit,
    sort: { email: 1 },
  };

  const contacts = await Contact.paginate({}, options);
  res.json(contacts);
};

module.exports = getAllPaginate;
