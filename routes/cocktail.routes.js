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
        res.render("cocktail/list", { cocktails: data })

        console.log(data)
    } catch (err) {
        next(err)
    }
})

// router.get("/myfavorites", isLoggedIn, async (req, res, next) => {
//     try {       
//         const currentUser = req.session.currentUser;
//         let user = await User.findOne({email: currentUser.email})
//         const myFavorites = user.my_favorites;
//         console.log(myFavorites)
//         res.render('cocktail/my-favorites', {favorites: myFavorites})
//     } catch (error) {
//         next(error)
//     }
// } )


// router.post("/addfavoritebyid", isLoggedIn, async (req, res, next) => {
//     try {
//         const id = req.body.cocktailId;
//         const currentUser = req.session.currentUser;
//         let user = await User.findOneAndUpdate({email: currentUser.email}, {$addToSet: {my_favorites: id}}, {new: true})
//         res.redirect("/cocktail/myfavorites")
//         console.log(user)

//     } catch (error) {

//     }
// })


// router.post("/removefavorite/:id",  async (req, res, next) => {
//     try {
//         console.log("test")
//         const cocktailId = req.body.cocktailId;       
//         const currentUser = req.session.currentUser;       
//         let user = await User.findOne({ username: currentUser.username })
//         console.log(user.my_favorites)
//         user.my_favorites = user.my_favorites.filter(_id => _id !== cocktailId)
//         await user.save()
//         res.redirect("/cocktail/myfavorites")  
//     } catch (error) {
//         next(error)
//     }
// })

router.get("/:id", isLoggedIn, async (req, res, next) => {
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


