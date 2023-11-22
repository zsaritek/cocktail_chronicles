const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();
const Cocktail = require('../services/cocktail');

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

const User = require("../models/User.model")
const Favorite = require("../models/Favorites.model")

//GET method  /favorite/myfavorites
router.get("/myfavorites", isLoggedIn, async (req, res, next) => {
    try {
        const currentUser = req.session.currentUser;
        let user = await User.findOne({ email: currentUser.email }).populate('my_favorites')
        const myFavorites = user.my_favorites;
        res.render('cocktail/my-favorites', { favorites: myFavorites, currentUser: currentUser }) // current user added to show navbar in my fav page
    } catch (error) {
        next(error)
    }
})

//POST /favorite/addfavoritebyid
router.post("/addfavoritebyid", isLoggedIn, async (req, res, next) => {
    try {
        const id = req.body.cocktailId;
        let favoriteCocktailResponse = await apiService.getCocktailById(id);
        const cocktail = new Cocktail(favoriteCocktailResponse.data.drinks[0])
        const update = { $set: cocktail };
        const c = await Favorite.findOneAndUpdate({ id: cocktail.id }, update, { upsert: true, new: true, setDefaultsOnInsert: true });
        let currentUser = req.session.currentUser;
        let user = await User.findOne({ email: currentUser.email })
        let user_fav = user.my_favorites
        if (user_fav.length < 12) {
            let fav = await User.findOneAndUpdate({ email: currentUser.email },
                { $addToSet: { my_favorites: c._id } }, { new: true })
        } else {
            return res.status(404).render("favorite-limit");
        }
        res.redirect("/favorite/myfavorites")
    } catch (error) {
        next(error)
    }
})


//POST /favorite/removefavoritebyid 
router.post("/removefavoritebyid", isLoggedIn, async (req, res, next) => {
    try {
        const cocktailId = req.body.cocktailId;
        const currentUser = req.session.currentUser;
        let favorite = await Favorite.findOne({ id: cocktailId })
        const object_id = favorite._id
        let user = await User.findOne({ username: currentUser.username })
        user.my_favorites = user.my_favorites.filter(favId => !favId.equals(object_id))
        await user.save()

        res.redirect("/favorite/myfavorites")
    } catch (error) {
        next(error)
    }
})







module.exports = router;


