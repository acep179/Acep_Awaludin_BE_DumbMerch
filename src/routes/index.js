const express = require("express");

const router = express.Router();

//. Controller
const { addUsers, getUser} = require("../controllers/user");
const { addProduct, getProducts, getProduct } = require("../controllers/product");

//. Router

router.post("/register", addUsers)
router.post("/login", getUser)
router.post("/product", addProduct)
router.get("/products", getProducts)
router.get("/product/:id", getProduct)

module.exports = router;