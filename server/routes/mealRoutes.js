let express = require('express');
let router = express.Router();
let mealController= require('../controllers/mealController')

// define routes to the correct controller here

router.get('/fetch', mealController.fetchAPIData) // fetching the api data. In postman - {{LOCAL}}/mealapi/fetch

router.get('/', mealController.getMeals) //getting the data from mongodb db. In postman -{{LOCAL}}/mealapi


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