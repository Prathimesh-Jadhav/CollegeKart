
const authorizeOwnerOrAdmin = async (req, res, next) => {
    if(req.user.userType == 'owner' || req.user.userType == 'superAdmin'){
        next();
    }
    else{
        res.status(500).json({message:"You are not authorized to perform this action",success:false});
    }
}

const authorizeSuperAdmin = async (req, res, next) => {
    if(req.user.userType != 'superAdmin'){
        res.status(500).json({message:"You are not authorized to perform this action",success:false});
    }
    next();
}

module.exports = {authorizeOwnerOrAdmin,authorizeSuperAdmin};