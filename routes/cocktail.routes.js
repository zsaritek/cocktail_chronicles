const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

const Cocktail = require('../services/cocktail');

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//GET cocktail/:id 



router.get("/random", async (req, res, next) => {
    try {
       
        const randomC = await apiService.getRandomCocktail();
        const randomCocktail = new Cocktail(randomC.data.drinks[0])
        
        
        console.log(randomCocktail)
        const { ...data } = randomCocktail;

        res.render('cocktail/random', data)


    } catch (err) {
        next(err)
    }
    
    
    
})

router.get("/list", async (req, res) => {

    try{
        const listOfAllCocktails = await apiService.getAllCocktails();
        const data = listOfAllCocktails.data.drinks.map(drink => {
            return {
                id: drink.idDrink,
                image: drink.strDrinkThumb,
                name:drink.strDrink
            }
        
        });

    
    res.render("cocktail/list", {cocktails: data})
      console.log(data)
       


    } catch (err){
        next(err)
    }

}
)


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


