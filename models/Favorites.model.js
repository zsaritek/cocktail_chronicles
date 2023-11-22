const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const favoritesSchema = new Schema(
  {

    id: {

      type: String,
      required: [true, "Cocktailid is required"],
      unique: true,
      trim: true

    },
    name: {
      type: String
    },
    image: {
      type: String
    },

    recipe: {
      type: String
    },

    ingredients: {
      type: []
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const myFavoriteCocktail = model('MyFavoriteCocktail', favoritesSchema)

module.exports = myFavoriteCocktail;
