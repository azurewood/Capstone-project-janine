const axios = require('axios');
const mealSchema = require('../models/meal.js')
const asyncHandler = require('../middleware/asyncHandler.js')
const Models = require('../models')

const fetchAPIData = (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?diet=vegetarian&includeIngredients="salad, egg"&number=30&offset=30',
        headers: {
            "X-RapidAPI-Key":  process.env.NEXT_PUBLIC_API_KEY, 
        }
    };

    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));

        return mealSchema.bulkWrite(response.data.results.map(({ title, image }) => 
        ({
            insertOne: {
                document: {
                    title, image, price: Math.floor(Math.random() * 20) //to change the price, drop the collection 'meals' in mongodb and then do {{LOCAL}}/mealapi/fetch in postman, then {{LOCAL}}/mealapi and refresh mongodb - meals collection should show up again
                }
            }
        })))
    })
    .then((result) => {
        res.status(200)
        res.json(result)
    })
    .catch((error) => {
        console.log(error);
    });

}

//creating another controller which gets data from mongodb database --> frontend
const getMeals = asyncHandler(async (req, res, next) => {
    const meals = await Models.Meal.find({})
    .then(data => res.send({ result: 200, data }))
    .catch(err => {
        console.log(err);
        res.send({ result: 400, error: err.message });
    });
})



//export the function for the router to access
module.exports = {
    fetchAPIData,
    getMeals
}