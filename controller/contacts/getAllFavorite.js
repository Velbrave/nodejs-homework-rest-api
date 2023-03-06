const { Contact } = require('../../models/contact');

const getAllFavorite = async (req, res, next) => {
  const favorite = req.query.favorite;
  const filter = {};
  if (favorite !== undefined) {
    filter.favorite = favorite;
  }

  const contacts = await Contact.find(filter);
  res.json(contacts);
};
module.exports = getAllFavorite;
