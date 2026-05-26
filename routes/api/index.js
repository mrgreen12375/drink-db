const router = require('express').Router();
const cocktailRoutes = require('./cocktail-routes');

router.use('/cocktails', cocktailRoutes);

module.exports = router;
