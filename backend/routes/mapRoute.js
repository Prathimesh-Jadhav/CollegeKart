const express = require("express");
const Router = express.Router();
const showDirectionsMap = require("../services/showDirectionsonMap");

Router.get("/getDirections",showDirectionsMap);

Router.get("/getFacilityLocation", (req, res) => {
  res.send("Get location of the facility");
});

module.exports = Router;