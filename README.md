The Cocktail Chronicles

Welcome to "The Cocktail Chronicles" project! This project combines our passion for cocktails with our technical skills. Explore a variety of cocktails, save your favorites, and discover new recipes in this application.

-Table of Contents
-Features
-Getting Started
-Project Structure
-Technologies Used
-APIs and Databases
-Styling
-Middleware
-Views
-Routes
-Services
-Project Planning 
-Created By

Features
-Navbar sections include My Favorites, My List, and Random Cocktails.
-Server-side rendering for a seamless user experience.
-Utilization of the external API TheCocktailDB with MongoDB, assisted by Postman.
-Entrance page with a brief explanation, and options for sign up and login; cocktail details are accessible only after logging in.
-Two models with a one-to-many relationship: User model and Favorite model.
-Styling achieved through Tailwind CSS applied to Handlebars (hbs) files.
-Integration of external images for backgrounds and styling.
-Sharing complete recipes for cocktails, including measurements and images.
-Middleware folder with cloudinary.config.js, isloggedin.js, and isloggedout.js.
-Cloudinary integration for loading user images; default image provided if the user preference is not specified.
-Random Cocktail page allows adding to the favorites list.
-In the cocktail list, clicking on a recipe allows adding it to the favorites; if already added, the option to remove is presented.
-Favorites list capped at a maximum of 12 recipes per user.

Getting Started
Clone the repository.
Install dependencies using npm install.
Set up MongoDB and configure the connection.
Configure Cloudinary with API keys in middleware/cloudinary.config.js.
Run the application using npm start.
Visit http://localhost:your_port in your browser.

Project Structure
middleware: Contains Cloudinary configuration, user authentication middleware.
views: Handlebars files for login, logout, signup, error, favorites, index, and layout.
routes: Route files for authentication, cocktails, favorites, and the main index.
services: API service files for interacting with external APIs and handling cocktail data.

Technologies Used
-Node.js
-MongoDB
-Tailwind CSS
-Handlebars (hbs)
-External APIs
-Postman for API testing
-APIs and Databases
-External API for cocktail data.
-MongoDB for storing user and favorite data.

APIs and Databases
-External API for cocktail data: TheCocktailDB.
-MongoDB for storing user and favorite data.

Styling
We used Tailwind CSS Mobile Friendly for a clean and responsive design applied to Handlebars files.

Middleware
cloudinary.config.js: Configuration for Cloudinary integration.
isloggedin.js: Middleware for checking user authentication.
isloggedout.js: Middleware for checking user logout status.

Views
login.hbs: Login page.
logout.hbs: Logout page.
signup.hbs: Signup page.
error.hbs: Error page.
favorites.hbs: Favorites page.
index.hbs: Main landing page.
layout.hbs: Main layout structure.

Routes
auth.routes.js: Authentication routes.
cocktail.routes.js: Cocktail-related routes.
favorite.routes.js: Favorites-related routes.
index.routes.js: Main index route.

Services
api.service.js: Service for interacting with external APIs.
cocktail.js: Service for handling cocktail data.

Project Planning
-Trello was used for project planning.
-Excalidraw was employed for mockup wireframes.

Created By
This project was created with love and dedication by "Zeynep Sariteke" and "Sebastian Schwarz". Cheers to good times and great cocktails! 🍹🎉

