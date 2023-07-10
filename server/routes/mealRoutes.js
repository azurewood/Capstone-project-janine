var express = require('express')

var router = express.Router()

var mealController = require('../controllers/mealController')

// define routes to the correct controller here
router.get('/', mealController.fetchAPIData) //going to the controller and caller this  fetchAPIData 


module.exports = router