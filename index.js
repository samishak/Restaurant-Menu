import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// JSON Data for Recipes
const recipeJSON = JSON.stringify([
  {
    id: "0001",
    type: "chicken",
    name: "Chicken Wrap",
    price: 2.99,
    ingredients: {
      protein: { name: "Chicken", preparation: "Grilled" },
      salsa: { name: "Toum Salsa", spiciness: "Medium" },
      toppings: [
        { name: "Lettuce", quantity: "1 cup", ingredients: ["Iceberg Lettuce"] },
        { name: "Cheese", quantity: "1/2 cup", ingredients: ["Cheddar Cheese", "Monterey Jack Cheese"] },
        { name: "Ketchup", quantity: "2 tablespoons", ingredients: ["Tomato", "Sugar", "Vinegar"] },
      ],
    },
  },
  {
    id: "0002",
    type: "beef",
    name: "Beef Wrap",
    price: 3.49,
    ingredients: {
      protein: { name: "Beef", preparation: "Seasoned and Grilled" },
      salsa: { name: "Salsa Toum", spiciness: "Hot" },
      toppings: [
        { name: "Onions", quantity: "1/4 cup", ingredients: ["White Onion", "Red Onion"] },
      ],
    },
  },
  {
    id: "0003",
    type: "fish",
    name: "Fish Wrap",
    price: 4.99,
    ingredients: {
      protein: { name: "Fish", preparation: "Battered and Fried" },
      salsa: { name: "Chipotle Mayo", spiciness: "Mild" },
      toppings: [
        { name: "Cabbage Slaw", quantity: "1 cup", ingredients: ["Shredded Cabbage", "Carrot", "Mayonnaise", "Lime Juice", "Salt"] },
        { name: "Pico de Gallo", quantity: "1/2 cup", ingredients: ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"] },
        { name: "Lime Crema", quantity: "2 tablespoons", ingredients: ["Sour Cream", "Lime Juice", "Salt"] },
      ],
    },
  },
  {
    id: "0004",
    type: "fahita",
    name: "Fahita Wrap",
    price: 6.99,
    ingredients: {
      protein: { name: "Chicken", preparation: "Grilled" },
      salsa: { name: "Chipotle Mayo", spiciness: "Barely Spicy" },
      toppings: [
        { name: "Coleslaw", quantity: "1 cup", ingredients: ["Shredded Cabbage", "Carrot", "Mayonnaise", "Lime Juice", "Salt"] },
        { name: "Pico de Avocado", quantity: "1/2 cup", ingredients: ["Avocado", "Onion", "Pepper", "Lime Juice", "Salt"] },
        { name: "Lime Crema", quantity: "2 tablespoons", ingredients: ["Sour Cream", "Lime Juice", "Salt"] },
      ],
    },
  },
  {
    id: "0005",
    type: "drinks",
    name: "Drinks",
    price: 4.99,
    ingredients: {
      protein: { name: "yogurt", preparation: "Boiled" },
      salsa: { name: "None", spiciness: "None" },
      toppings: [
        { name: "Ayran", quantity: "1 cup", ingredients: ["Yogurt", "Salt", "Water"] },
        { name: "Local Coke", quantity: "1 cup", ingredients: ["Secret Recipe", "Aspartame", "Lime"] },
        { name: "Tea", quantity: "1 cup", ingredients: ["Tea Bag", "Sugar"] },
      ],
    },
  },
  {
    id: "0006",
    type: "baladi ghada",
    name: "baladi ghada",
    price: 4.99,
    ingredients:{
      protein: { name: "meat", preparation: "fried" },
      salsa: { name: "oil", spiciness: "none" },
      toppings: [
        {
          name: "wara2 3inab",
          quantity: "1 portion",
          ingredients: ["grape leaves", "rice", "meat"],
        },
        {
          name: "fatouch",
          quantity: "3 portions",
          ingredients: ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"],
        },
        { name: "kousa bel laban ", quantity: "2 portions", ingredients: ["Sour Cream", "Lime Juice", "Salt"] },
        {
          name: "sh3ayriye soup",
          quantity: "1 portion",
          ingredients: ["Tomato soup", "Onion", "meat balls", "pasta"]
        },
        { name: "mkanek ", quantity: "1 portion", ingredients: ["meat", "pomerganate"] },
      ],
    },
  },
]);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Default data (nothing selected initially)
let data = null;

// Route for rendering the index page
app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: data });
});

// Route for handling recipe selection
app.post("/recipe", (req, res) => {
  const userChoice = req.body.choice.toLowerCase();
  const recipes = JSON.parse(recipeJSON);

  data = recipes.find((recipe) => recipe.name.toLowerCase() === userChoice) || null;

  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
