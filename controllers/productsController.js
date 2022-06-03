const Products = require("../modules/productsModel");

// / Refactor route controllers
// This is to retrieve all the products at once
exports.getAllProducts = async(request, response) => {
    try {
        console.log('Hello');
        // Retrieve all the products from our database 
        const products = await Products.find();
        //console.log(products);
        // send response 
        response.status(200).json({
            status: "success",
            data: {
                products: products,
            },
        });
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error,
        });
    }
};

//  This controller is to create a new products
exports.createProducts = (request, response) => {
    response.status(500).json({
        status: "fail",
        data: {
            message: "undefined routes",
        },
    });
};

exports.createProducts = async(request, response) => {
    // lets create new products 
    const newProducts = await Products.create(request.body);
    try {
        // send reponse 
        response.status(201).json({
            status: "success",
            data: {
                newProducts: newProducts,
            },
        });
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error,
        })
    }
};

// This controller is to retrieve a single products
exports.getSingleProducts = async(request, response) => {
    try {
        const products = await Products.findById(request.params.id);

        response.status(200).json({
            status: "success",
            data: {
                products: products,
            },
        });
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error,
        });
    }
};
// This controller is to update a single products data
exports.updateProducts = async(request, response) => {
    try {
        const updatedProducts = await Products.findByIdAndUpdate(request.params.id, request.body, { new: true });
        response.status(500).json({
            status: "fail",
            data: {
                updatedProducts,
            },
        });
    } catch (error) {
        response.status(500).json({
            status: "fail",
            message: error
        })
    }
};

// This controller is to delete a single products
exports.deleteProducts = async(request, response) => {
    try {

        await Products.findByIdAndDelete(request.params.id)
        response.status(204).json({
            status: "success",
            data: {},
        });
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: error
        })
    }
};