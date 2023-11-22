class Cocktail {
    constructor(cocktailData) {
        this.id = cocktailData.idDrink;
        this.name = cocktailData.strDrink;
        this.recipe = cocktailData.strInstructions;
        this.image = cocktailData.strDrinkThumb;
        this.ingredients = [];
        for (let i = 1; i <= 12; i++) {
            const ingredient_element = cocktailData[`strIngredient${i}`];
            const measure_element = cocktailData[`strMeasure${i}`]
            if (ingredient_element) {
                this.ingredients.push({
                    ingredient: ingredient_element,
                    measurement: measure_element

                });
            }
        }


    }
}

module.exports = Cocktail;