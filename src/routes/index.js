const express = require("express");

const router = express.Router();

//. Controller
const { addUsers} = require("../controllers/user");

//. Router

router.post("/register", addUsers)
// router.get("/users", getUsers)


module.exports = router;