// Require express in order to build an express application
const express = require("express");
// Create a variable to store our express methods
const app = express();

// IMPORT ROUTER
const productsRouter = require("./routes/productsRoutes");
app.use(express.json());



// Create middleware to handle our routes
app.use("/api/v1/products", productsRouter);

module.exports = app;