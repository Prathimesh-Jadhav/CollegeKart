const express = require("express");
const Router = express.Router();
const upload = require("../services/fileUpload");
const {registerFacility,getAllfacilities,getFacilityDetails,updateFacility,deleteFacility} = require("../controllers/facilityController");
const {authorizeOwnerOrAdmin} = require("../services/authorization");

Router.post("/registerFacility",authorizeOwnerOrAdmin,upload.array("files",2),registerFacility);

Router.put("/updateFacility/:id",authorizeOwnerOrAdmin,updateFacility);

Router.delete("/deleteFacility/:id",authorizeOwnerOrAdmin,deleteFacility);

Router.get("/getAllFacilities",getAllfacilities);

Router.get("/getFacility/:id",getFacilityDetails);

module.exports = Router;