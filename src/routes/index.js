const express = require("express");

const router = express.Router();

//. Controller
const { register, login} = require("../controllers/auth");

//. Router

router.post("/register", register)
router.post("/login", login)


module.exports = router;