const express = require("express");

const router = express.Router();

//. Controller
const { addUsers, getUser} = require("../controllers/user");
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/product");

//. Router

router.post("/register", addUsers)
router.post("/login", getUser)
router.post("/product", addProduct)
router.get("/products", getProducts)
router.get("/product/:id", getProduct)
router.patch("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)


module.exports = router;