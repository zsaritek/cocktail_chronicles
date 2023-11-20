const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true
    },
    my_favorites: {
      type: [{ type: Schema.Types.ObjectId, ref: 'MyFavoriteCocktail' }]
    },
    imageUrl: {
      type: String,
      default: "https://res.cloudinary.com/dexnyholt/image/upload/v1700513062/cocktail_chronicles/default.jpg"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
