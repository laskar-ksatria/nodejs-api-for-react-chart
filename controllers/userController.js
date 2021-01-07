const User = require('../models/user');
const { generateToken } = require('../helpers/jwt');


class UserController {

    static read(req,res,next) {
        User.find({})
            .then(users => res.status(200).json(users))
    };

    static readMe(req,res,next) {
        let _id = req.decoded.id;
        User.findOne({_id})
            .then(user => res.status(200).json(user))
            .catch(next)
    };

    static login(req,res,next) {
        let { username, password } = req.body;
        User.findOne({username})
            .then(user => {
                if (user) {
                    if (password === user.password) {
                        let token = generateToken({id: user.id});
                        res.status(200).json({message: `Welcome ${username}`, token, user})
                    }else {
                        next({message: "Invalid username / password"})
                    }
                }else {
                    next({message: "Invalid username / password"})
                }
            })
    };

    static create(req,res,next) {
        let { username, password } = req.body;

        User.create({username, password})
            .then(user => {
                let createdDate = new Date();
                req.assets = {
                    assets: 0,
                    assetCreated: createdDate,
                    user: user.id
                }
                res.status(200).json({message: `${username} has been registered`});
                req.createCheck = true;
                next();
            })
            .catch(next)
    };


};

module.exports = UserController;

