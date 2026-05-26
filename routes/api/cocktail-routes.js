const router = require('express').Router();
const { Op } = require('sequelize');
const { Cocktail } = require('../../models');


// get all cocktails
router.get('/', (req, res) => {
  Cocktail.findAll()
    .then(dbCocktailData => res.json(dbCocktailData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one cocktail
router.get('/:id', (req, res) => {
  Cocktail.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbCocktailData => {
      if (!dbCocktailData) {
        res.status(404).json({ message: 'No cocktail found with this id' });
        return;
      }
      res.json(dbCocktailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get cocktail by drink name
router.get('/name/:drinkName', (req, res) => {
  Cocktail.findOne({
    where: {
      drinkName: {
        [Op.iLike]: req.params.drinkName
      }
    }
  })
    .then(dbCocktailData => {
      if (!dbCocktailData) {
        res.status(404).json({ message: 'No cocktail found with this name' });
        return;
      }

      res.json(dbCocktailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get cocktail by alcohol name
router.get('/alcohol/:drinkIngredient1', (req, res) => {
  Cocktail.findAll({
    where: {
      drinkIngredient1: {
        [Op.iLike]: req.params.drinkIngredient1
      }
    }
  })
    .then(dbCocktailData => {
      if (!dbCocktailData) {
        res.status(404).json({ message: 'No cocktail found with this name' });
        return;
      }

      res.json(dbCocktailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a cocktail
router.post('/', (req, res) => {
  Cocktail.create({
    drinkName: req.body.drinkName,
    drinkImage: req.body.drinkImage,
    drinkInstructions: req.body.drinkInstructions,
    drinkIngredient1: req.body.drinkIngredient1,
    drinkIngredient2: req.body.drinkIngredient2,
    drinkIngredient3: req.body.drinkIngredient3,
    drinkMeasurement1: req.body.drinkMeasurement1,
    drinkMeasurement2: req.body.drinkMeasurement2,
    drinkMeasurement3: req.body.drinkMeasurement3,
    drinkVideo: req.body.drinkVideo
  })
    .then(dbCocktailData => res.json(dbCocktailData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a cocktail
router.put('/:id', (req, res) => {
  Cocktail.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCocktailData => {
      if (!dbCocktailData[0]) {
        res.status(404).json({ message: 'No cocktail found with this id' });
        return;
      }
      res.json(dbCocktailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a cocktail
router.delete('/:id', (req, res) => {
  Cocktail.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCocktailData => {
      if (!dbCocktailData) {
        res.status(404).json({ message: 'No cocktail found with this id' });
        return;
      }
      res.json(dbCocktailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
