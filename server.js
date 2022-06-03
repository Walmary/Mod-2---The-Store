//
const mongoose = require("mongoose");
//const mongodb = require("mongodb");
const dotenv = require("dotenv");



// use dotenv to connect to our config file  
dotenv.config({
    path: "./config.env"
});

console.log(process.env);

// IMPORT OUR EXPRESS APPLICATION
const app = require("./app");

const { getAllProducts } = require("./controllers/productsController");

const productsDB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() => {
    console.log("DATABASE IS UP AND RUNNING..");
})


app.get("/products", (request, response) => {
    //res.send("Welcome to my API");
    res.send(router.getAllProducts())
});


//msg of test
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// Create a variable that represent our port number
const port = 3000;

// Listen to the request/response cycle
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});