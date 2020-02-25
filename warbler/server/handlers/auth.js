const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next){
    try {
        //find a user
        let user = await db.User.findOne({
            email: req.body.email
        });
        let{ id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password);
        
        if(isMatch){
            let token = jwt.sign({
                id, 
                username,
                profileImageUrl,
            }, process.env.SECRET_KEY);

            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            });
        } 
        else {
            return next({
                status: 400,
                message: "Invalid Email/Password." 
            });
        }
            
    } catch (error) {
        return next({
            status: 400,
            message: "Invalid Email/Password." 
        });
    }
}

exports.signup = async function(req, res, next){
    try {
        //create a user
        let user = await db.User.create(req.body);
        let { id, username, profileImageUrl } = user;
        
        //create a token (signing a token)
        let token = jwt.sign({
            id,
            username,
            profileImageUrl
        }, process.env.SECRET_KEY);

        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
    } catch (error) {
        //if validation fails
        if(error.code === 11000){
            error.message = "Sorry, that username and/or email is taken";
        }

        return next({
            status: 400,
            message: error.message
        });
    }
};