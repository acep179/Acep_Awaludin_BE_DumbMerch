const express = require("express");

const router = express.Router();

//. Controller
const { addUsers, getUser} = require("../controllers/user");
const { addProduct, getProducts, getProduct, updateProduct } = require("../controllers/product");

//. Router

router.post("/register", addUsers)
router.post("/login", getUser)
router.post("/product", addProduct)
router.get("/products", getProducts)
router.get("/product/:id", getProduct)
router.patch("/product/:id", updateProduct)


module.exports = router;