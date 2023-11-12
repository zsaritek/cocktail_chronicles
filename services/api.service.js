const axios = require("axios");
class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
        })
    }
    getAllCocktails = () => {
        return this.api.get("/filter.php?c=Cocktail");
    }
    getRandomCocktail = () => {
        return this.api.get("/random.php");
    }
    getCocktailById = (cocktailId) => {
        return this.api.get(`/lookup.php?i=${cocktailId}`);
    }
}












module.exports = ApiService;