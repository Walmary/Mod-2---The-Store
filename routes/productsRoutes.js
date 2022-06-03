// IMPORT EXPRESS TO CREATE EXPRESS ROUTERS
const express = require("express");
const app = require("../app");

const productsSchema = require("../modules/productsModel");
// IMPORT OUR PRODUCTS CONTROLLER
const productsController = require("../controllers/productsController");

// Create an express router
const router = express.Router();

///products	POST	create    productsController.createProducts


console.log("Route +++++ ");
// Lets refactor our route handlers
router
    .route("/products")
    .get(productsController.getAllProducts);
router
    .route("/")
    .post(productsController.createProducts);
router
    .route("/:id")
    .get(productsController.getSingleProducts)
    .patch(productsController.updateProducts)
    .delete(productsController.deleteProducts);

// EXPORT OUR ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;