const express = require("express");

const router = express.Router();

//. Controller
const { addUsers, getUser} = require("../controllers/user");

//. Router

router.post("/register", addUsers)
router.post("/login", getUser)


module.exports = router;