const Cocktail = require('./Cocktail');

Cocktail.hasMany(Cocktail, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

module.exports = {Cocktail};
