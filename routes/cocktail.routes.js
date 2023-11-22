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
        const { ...data } = randomCocktail;
        data.currentUser = req.session.currentUser // in order to show navbar in random page
        // step 1 - fetch user
        // step 2 - populate my favorite list
        // step 3-filter through my favorite list with cocktail id
        // step 4- if filter cocktail is empty,existing is false otherwise is true
        let user = await User.findOne(
            { username: req.session.currentUser.username }
        ).populate("my_favorites")
        let favorites = user.my_favorites.filter(cocktail => {
            return cocktail.id === randomCocktail.id
        })
        if (favorites.length > 0) {
            data.existing = true;
        } else {
            data.existing = false;
        }
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
    } catch (err) {
        next(err)
    }
})


router.get("/:id", isLoggedIn, async (req, res, next) => {
    try {
        const cocktailId = req.params.id
        const cocktailResp = await apiService.getCocktailById(cocktailId)
        const cocktail = new Cocktail(cocktailResp.data.drinks[0])
        const { ...data } = cocktail;
        data.currentUser = req.session.currentUser // in order to show navbar in details hbs
        let user = await User.findOne(
            { username: req.session.currentUser.username }
        ).populate("my_favorites")
        let favorites = user.my_favorites.filter(cocktail => {
            return cocktail.id === cocktailId
        })
        if (favorites.length > 0) {
            data.existing = true;
        } else {
            data.existing = false;
        }
        res.render('cocktail/detail', data)
    } catch (error) {
        next(error)
    }
})





module.exports = router;


