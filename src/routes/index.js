const express = require("express");

const router = express.Router();

//. Controller

const { addUser, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { addCategory, getCategories, getCategory, updateCategory, deleteCategory } = require("../controllers/category");
const { addTransaction, getTransactions } = require("../controllers/transaction");
const { register, login } = require("../controllers/auth");

//. Middleware
const { auth } = require('../middlewares/auth')


//. Router

router.post('/user', addUser)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

router.post("/product", auth, addProduct)
router.get("/products", getProducts)
router.get("/product/:id", getProduct)
router.patch("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)

router.post("/category", addCategory)
router.get("/categories", getCategories)
router.get("/category/:id", getCategory)
router.patch("/category/:id", updateCategory)
router.delete("/category/:id", deleteCategory)

router.post("/transaction", auth, addTransaction)
router.get("/transactions", getTransactions)

router.post("/register", register)
router.post("/login", login)

module.exports = router;