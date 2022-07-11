const express = require("express");

const router = express.Router();

//. Controller
const { addUsers, getUser} = require("../controllers/user");
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { addCategory, getCategories, getCategory, updateCategory, deleteCategory } = require("../controllers/category");

//. Router

router.post("/register", addUsers)
router.post("/login", getUser)

router.post("/product", addProduct)
router.get("/products", getProducts)
router.get("/product/:id", getProduct)
router.patch("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)

router.post("/category", addCategory)
router.get("/categories", getCategories)
router.get("/category/:id", getCategory)
router.patch("/category/:id", updateCategory)
router.delete("/category/:id", deleteCategory)


module.exports = router;