const express = require("express");

const router = express.Router();

//. Controller
const {  } = require("../controllers/user");

//. Router

router.get("/users", getUsers)


module.exports = router;