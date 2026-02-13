const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const authMiddleware = async (req, res, next) => {
 
try {
    const token = req.header("Authorization");

    if(!token){

        return res.status(401).json({message : "Unauthorized"})
    }

    const jwtToken = token.replace("Bearer ", "");
    console.log(jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken , process.env.JWT_SECRET);

        const userData = await User.findOne({email : isVerified.email}).select("-password");

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        req.username = userData.username
        console.log("user data",userData);
    } catch (error) {
        return res.status(401).json({message : "Unauthorized"})
    }
    next();
} catch (error) {
    next(error);
}
};
module.exports = authMiddleware;