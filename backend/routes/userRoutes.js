const express = require("express");
const Router = express.Router();
const { register, login } = require("../controllers/userController");

Router.post("/login", login);
Router.post("/register",register);

module.exports = Router;