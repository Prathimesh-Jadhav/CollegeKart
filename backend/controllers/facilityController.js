const { get, default: mongoose } = require('mongoose');
const facilityModel = require('../models/facilityModel');

const registerFacility = async (req, res) => {

    let payload = {};
    req.user={
        _id: '14526859658eerr',
        facilityType: "stationary",
    }
    
    if(req.user.facilityType== "medical"){
        const {ownerID,facilityName,ownerName,location,contact,certificate} = req.body;
        payload = {ownerID,facilityName,ownerName,location,contact,certificate};
    }
    else if(req.user.facilityType== "room"){
        const {facilityName,ownerName,rulebook,location,contact,availableRooms} = req.body;
        payload = {facilityName,ownerName,rulebook,location,contact,availableRooms};
    }
    else if(req.user.facilityType== "clinic"){
        const {ownerName,ownerID,location,contact,rulebook,specialization,facilityName} = req.body;
        payload = {ownerID,location,contact,rulebook,specialization,facilityName,ownerName};
    }
    else if(req.user.facilityType== "mess"){
        const {ownerName,facilityName,rulebook,contact,location} = req.body;
        payload = {ownerName,facilityName,rulebook,contact,location};
    }
    else if(req.user.facilityType== "stationary"){
        const {facilityName,ownerName,location,contact} = req.body;
        payload = {facilityName,ownerName,location,contact};
    }

    if(!req.user){
        res.status(500).json({message:"Please Login",success:false});
    }

    try {
        if(!payload){
            return res.status(500).json({message:"Invalid Payload",success:false});
        }
        console.log(payload);
        const facility = await facilityModel.create({...payload,facilityType:req.user.facilityType,createdBy:req.user._id});
        res.status(200).json({message:"Facility Registered Successfully",data:facility,success:true});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"registration failed",success:false});
    }
    
}

const getAllfacilities = async (req, res) => {
    try {
        const facilities = await facilityModel.find();
        res.status(200).json({message:"Facilities fetched successfully",data:facilities,success:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"registration failed",success:false});
    }
}

const getFacilityDetails = async (req, res) => {
    try {
        const facility = await facilityModel.findById(req.params.id);
        res.status(200).json({message:"Facility fetched successfully",data:facility,success:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"registration failed",success:false});
    }
}

const updateFacility = async (req, res) => {
    try {
        const facility = await facilityModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({message:"Facility updated successfully",data:facility,success:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"registration failed",success:false});
    }
}

const deleteFacility = async (req, res) => {    
    try {
        const facility = await facilityModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Facility deleted successfully",data:facility,success:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"registration failed",success:false});
    }
}



module.exports = {registerFacility,getAllfacilities,getFacilityDetails,updateFacility,deleteFacility};