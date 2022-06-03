// IMPORT MONGOOSE IN ORDER TO CREATE A SCHEMA
const mongoose = require("mongoose");

// Create our products schema
const productsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    imgSrc: {
        type: String,
    },
    instock: {
        type: Number,
    },
});

//  Lets FINALLYYYYYYYY!!!!! CREATE OUR MODEL
const Products = mongoose.model("Products", productsSchema);
module.exports = Products;