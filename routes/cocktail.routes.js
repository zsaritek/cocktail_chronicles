const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();
const Cocktail = require('../services/cocktail');

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

const User = require("../models/User.model")


//GET /cocktail/random 
router.get("/random", isLoggedIn, async (req, res, next) => {
    try {
        const randomC = await apiService.getRandomCocktail();
        const randomCocktail = new Cocktail(randomC.data.drinks[0])
        console.log(randomCocktail)
        const { ...data } = randomCocktail;
        data.currentUser = req.session.currentUser // in order to show navbar in random page

        res.render('cocktail/random', data)
    } catch (err) {
        next(err)
    }
})
//GET /cocktail/list
router.get("/list", isLoggedIn, async (req, res) => {
    try {
        const listOfAllCocktails = await apiService.getAllCocktails();
        const data = listOfAllCocktails.data.drinks.map(drink => {
            return {
                id: drink.idDrink,
                image: drink.strDrinkThumb,
                name: drink.strDrink
            }
        });
        const currentUser = req.session.currentUser
        res.render("cocktail/list", { cocktails: data, currentUser: currentUser }) // in order to show navbar in cocktail list hbs 

        console.log(data)
    } catch (err) {
        next(err)
    }
})


router.get("/:id", isLoggedIn, async (req, res, next) => {
    try {
        const cocktailResp = await apiService.getCocktailById(req.params.id)
        // console.log("raw response", cocktailResp) 
        // console.log("---------")
        // console.log("response.data", cocktailResp.data)

        //response.data is ugly data. that is why we created more logical data to easily use 
        const cocktail = new Cocktail(cocktailResp.data.drinks[0])
        console.log("handsome data", cocktail)
        const { ...data } = cocktail;
        data.currentUser = req.session.currentUser // in order to show navbar in details hbs
        res.render('cocktail/detail', data)

    } catch (error) {
        next(error)
    }
})





module.exports = router;


