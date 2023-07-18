let express = require('express');
let router = express.Router();
let mealController= require('../controllers/mealController')

// define routes to the correct controller here
//GET is used to request data from a specified resource
router.get('/fetch', mealController.fetchAPIData) // fetching the api data. In postman - {{LOCAL}}/mealapi/fetch

router.get('/', mealController.getMeals) //getting the data from mongodb db. In postman -{{LOCAL}}/mealapi

//POST is used to send data to a server to create/update a resource
//Data sent to the server with POST is stored in the request body of the HTTP request
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