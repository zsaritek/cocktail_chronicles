class Cocktail {
    constructor(cocktailData) {
        this.id = cocktailData.idDrink;
        this.name = cocktailData.strDrink;
        this.recipe = cocktailData.strInstruction;
        this.image = cocktailData.strDrinkThumb;
        this.ingredients = [];
        if (cocktailData.strIngredient1) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient1,
                measurement: cocktailData.strMeasure1
            })
        }
        if (cocktailData.strIngredient2) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient2,
                measurement: cocktailData.strMeasure2
            })
        }
        if (cocktailData.strIngredient3) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient3,
                measurement: cocktailData.strMeasure3
            })

        }
        if (cocktailData.strIngredient4) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient4,
                measurement: cocktailData.strMeasure4
            })
        }
        if (cocktailData.strIngredient5) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient5,
                measurement: cocktailData.strMeasure5
            })
        }
        if (cocktailData.strIngredient6) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient6,
                measurement: cocktailData.strMeasure6
            })
        }
        if (cocktailData.strIngredient7) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient7,
                measurement: cocktailData.strMeasure7
            })
        }
        if (cocktailData.strIngredient8) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient8,
                measurement: cocktailData.strMeasure8
            })
        }
        if (cocktailData.strIngredient9) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient9,
                measurement: cocktailData.strMeasure9
            })
        }
        if (cocktailData.strIngredient10) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient10,
                measurement: cocktailData.strMeasure10
            })
        }
        if (cocktailData.strIngredient11) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient11,
                measurement: cocktailData.strMeasure11
            })
        }
        if (cocktailData.strIngredient12) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient12,
                measurement: cocktailData.strMeasure12
            })
        }
        if (cocktailData.strIngredient13) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient13,
                measurement: cocktailData.strMeasure13
            })

        }
        if (cocktailData.strIngredient14) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient14,
                measurement: cocktailData.strMeasure14
            })
        }
        if (cocktailData.strIngredient15) {
            this.ingredients.push({
                ingredient: cocktailData.strIngredient15,
                measurement: cocktailData.strMeasure15
            })
        }

    }
}

module.exports = Cocktail;