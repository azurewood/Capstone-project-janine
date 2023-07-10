var express = require('express')

var router = express.Router()

var aPIDataController = require('../controllers/APIDataController')

// define routes to the correct controller here
router.get('/', aPIDataController.fetchAPIData) //going to the controller and caller this  fetchAPIData 


module.exports = router