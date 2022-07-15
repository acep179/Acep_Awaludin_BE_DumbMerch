const express = require("express");

const router = express.Router();

//. Controller
const { register } = require("../controllers/auth");

//. Router

router.post("/register", register)


module.exports = router;