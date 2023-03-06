const getAll = require('./getAll');
const getById = require('./getById');
const addById = require('./addById');
const deleteById = require('./deleteById');
const updateById = require('./updateById');
const updateFavorite = require('./updateFavorite');
const getAllPaginate = require('./getAllPaginate');
const getAllFavorite = require('./getAllFavorite');

module.exports = {
  getAll,
  getById,
  addById,
  deleteById,
  updateById,
  updateFavorite,
  getAllPaginate,
  getAllFavorite,
};
