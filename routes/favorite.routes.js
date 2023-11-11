const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

const Cocktail = require('../services/cocktail');


const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


const User = require("../models/User.model")

const Favorite = require("../models/Favorites.model")
//GET cocktail/:id 








router.get("/myfavorites", isLoggedIn, async (req, res, next) => {
    try {
        
        const currentUser = req.session.currentUser;

        let user = await User.findOne({email: currentUser.email})

        const myFavorites = user.my_favorites;

        console.log(myFavorites)

        res.render('cocktail/my-favorites', {favorites: myFavorites})

    } catch (error) {
        next(error)
    }
} )


router.post("/addfavoritebyid",  async (req, res, next) => {
    try {

        const id = req.body.cocktailId;
        console.log(id)
        //const currentUser = req.session.currentUser;
        // Here we add our cocktail to our Favorite model
        
        let favoriteCocktailResponse = await apiService.getCocktailById(id);
        
        const cocktail = new Cocktail(favoriteCocktailResponse.data.drinks[0])
        
        const c = await Favorite.create(cocktail)
        console.log(c)
        let currentUser = req.session.currentUser;

        let user = await User.findOneAndUpdate({email: currentUser.email}, {$addToSet: {my_favorites: c._id}}, {new: true})

        res.redirect("/favorite/myfavorites")
        console.log(user)
        
    } catch (error) {
        next(error)
    }
})


router.get("/removefavorite/:id",  async (req, res, next) => {
    try {
        
        const cocktailId = req.params.id;
        
        const currentUser = req.session.currentUser;
        
        let favorite = await Favorite.findOne({id: cocktailId})

        const object_id = favorite._id

        let user = await User.findOne({ username: currentUser.username })
        console.log(user.my_favorites)
        
        user.my_favorites = user.my_favorites.filter(favId => !favId.equals(object_id))
        console.log(user.my_favorites)
        await user.save()
        res.redirect("/cocktail/myfavorites")


        
        
    } catch (error) {
        next(error)
    }
})







module.exports = router;


