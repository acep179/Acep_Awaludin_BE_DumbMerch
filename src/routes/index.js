const express = require("express");

const router = express.Router();

//. Controller
const { addUsers, getUser} = require("../controllers/user");
const { addProduct } = require("../controllers/product");

//. Router

router.post("/register", addUsers)
router.post("/login", getUser)
router.post("/product", addProduct)


module.exports = router;