let express = require('express');
let router = express.Router();
let mealController= require('../controllers/mealController')

// define routes to the correct controller here

router.get('/', mealController.fetchAPIData) //going to the controller and calling this  fetchAPIData 


router.post('/create', (req, res) => {
    Controllers.mealController.createMeal(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.mealController.updateMeal(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.mealController.deleteMeal(req, res);
});

module.exports = router