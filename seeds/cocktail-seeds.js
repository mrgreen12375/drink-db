const { Cocktail } = require('../models');

const cocktailData = [
  {
    drinkName: 'Martini',
    drinkImage: 'https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg',
    drinkInstructions: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
    drinkIngredient1: 'Gin',
    drinkIngredient2: 'Dry Vermouth',
    drinkIngredient3: 'Olive',
    drinkMeasurement1: '1 2/3 oz',
    drinkMeasurement2: '1/3 oz',
    drinkMeasurement3: '1',
    drinkVideo: 'https://www.youtube.com/watch?v=ApMR3IWYZHI',
  },
  {
    drinkName: 'Sidecar',
    drinkImage: 'https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg',
    drinkInstructions: 'Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.',
    drinkIngredient1: 'Cognac',
    drinkIngredient2: 'Cointreau',
    drinkIngredient3: 'Lemon Juice',
    drinkMeasurement1: '2 oz',
    drinkMeasurement2: '1/2 oz',
    drinkMeasurement3: '1 oz',
    drinkVideo: 'https://www.youtube.com/watch?v=uvKKILoO-Nk',
  },

];

const seedCocktials = () => Cocktail.bulkCreate(cocktailData);

module.exports = seedCocktials;
