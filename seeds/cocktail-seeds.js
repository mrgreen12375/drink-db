const { Cocktail } = require('../models');

const cocktailData = [
  {
    drinkName: 'Drink Name 1',
    drinkImage: 'image.jpg',
    drinkInstructions: 'instructions',
    drinkIngredient1: 'ingredient1',
    drinkIngredient2: 'ingredient2',
    drinkIngredient3: 'ingredient3',
    drinkMeasurement1: 'measurement1',
    drinkMeasurement2: 'measurement2',
    drinkMeasurement3: 'measurement3',
  },
  {
    drinkName: 'Drink Name 2',
    drinkImage: 'image.jpg',
    drinkInstructions: 'instructions',
    drinkIngredient1: 'ingredient1',
    drinkIngredient2: 'ingredient2',
    drinkIngredient3: 'ingredient3',
    drinkMeasurement1: 'measurement1',
    drinkMeasurement2: 'measurement2',
    drinkMeasurement3: 'measurement3',
  },

];

const seedCocktials = () => Product.bulkCreate(cocktailData);

module.exports = seedCocktials;
