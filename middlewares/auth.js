const { verifyToken } = require('../helpers/jwt')

const UserAuth = (req,res,next) => {
    
    let token = req.headers.jwttoken;
    if (token) {
        let decoded = verifyToken(token);
        req.decoded = decoded;
        next();
    }else {
        next({message: "You must login first as user"})
    }
};

module.exports = { UserAuth }