const express = require('express');
const router = express.Router();




const api = require('../services/api.service');


const ApiService = new api();

/* GET home page */
router.get("/", async (req, res, next) => {
  
  const randomCocktail = await ApiService.getRandomCocktail()
  console.log(randomCocktail.data.drinks)
  res.render('index');
});





module.exports = router;
