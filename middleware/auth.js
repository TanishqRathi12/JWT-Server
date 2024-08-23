require("dotenv").config();
const jwt = require("jsonwebtoken");


const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret";
const expiresIn = "1h";

const auth = (req, res, next) => {
    const token = req.header("Authentication").replace("Bearer ", "");
    // 'Authentication: 'Bearer <token>'
    if(!token){
        return res.status(403).json({message:"Access Denied"});
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded;
        next();
    } catch (error) {
        res.status(400).json({message:"Invalid Token"});
    }
}

module.exports = {
    auth,
    JWT_SECRET,
    expiresIn,
};