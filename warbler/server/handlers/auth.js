const db = require("../models");
const jwt = require("jsonwebtoken");

exports.singin = function(){}

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