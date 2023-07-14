const axios = require('axios');
const mealSchema = require('../models/meal.js')

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
                    title, image, price: Math.random() * 100
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

//export the function for the router to access
module.exports = {
    fetchAPIData
}