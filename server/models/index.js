'use strict'
//index.js links to these files. 
//index.js exports all these models as key-value pairs from a single place to make it easier to import them in other parts of the code.
//keys represent the model names and the values are the require statements. 

module.exports = {
    User: require('./user'),
    Meal: require('./meal'),
    Order: require('./order'),
    Payment: require('./payment')
};