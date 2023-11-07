const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

const Cocktail = require('../services/cocktail');

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//GET cocktail/:id 

router.get("/:id", /*isLoggedIn*/ async (req, res, next) => {
    try {
        const cocktailResp = await apiService.getCocktailById(req.params.id)
        // console.log("raw response", cocktailResp) 
        // console.log("---------")
        // console.log("response.data", cocktailResp.data)

        //response.data is ugly data. that is why we created more logical data to easily use 
        const cocktail = new Cocktail(cocktailResp.data.drinks[0])
        console.log("handsome data", cocktail)
        /*
        handsome data Cocktail {
            id: '12452',
            name: 'Victory Collins',
            recipe: undefined,
            image: 'https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg',
            ingredients: [
                { ingredient: 'Vodka', measurement: '1 1/2 oz ' },
                { ingredient: 'Lemon juice', measurement: '3 oz ' },
                { ingredient: 'Grape juice', measurement: '3 oz unsweetened ' },
                { ingredient: 'Powdered sugar', measurement: '1 tsp ' },
                { ingredient: 'Orange', measurement: '1 slice ' }
            ]
        }*/

        const { ...data } = cocktail;

        res.render('cocktail/detail', data)
    } catch (error) {
        next(error)
    }
})

module.exports = router;


