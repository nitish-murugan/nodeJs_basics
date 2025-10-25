const userObj = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerUser = async function(request, response) {
    try{
        const {username, email, password, role} = request.body;
        const isUser = await userObj.findOne({$or: [{username},{email}]});
        if(isUser){
            response.status(500).json({
                success: false,
                message: "User already exists"
            });
        }
        else{
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);
            const addedUser = await userObj.create({
                username: username,
                email: email,
                password: hashedPassword,
                role: role
            });
            response.status(500).json({
                success: true,
                message: "User added successfully"
            });
        }
    } catch(e){
        console.log(`Error occured while registering ${e}`);
        response.status(500).json({
            success: true,
            message: "Error occured while registering, please try again!"
        });
    }
}

const loginUser = async function(request, response) {
    try{
        const {username, password} = request.body;
        const isUser = await userObj.findOne({username: username});
        if(!isUser){
            return response.status(500).json({
                success: false,
                message: "User not found"
            });
        }

        const isPassword = await bcryptjs.compare(password, isUser.password);
        if(!isPassword){
            return response.status(500).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const accessToken = jwt.sign({
            userId: isUser._id,
            username: isUser.username,
            role: isUser.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "10m"
        });

        response.status(200).json({
            status: true,
            message: "User logged in successfully",
            accessToken
        });

    } catch(e){
        console.log(`Error occured while logging in ${e}`);
        response.status(500).json({
            success: true,
            message: "Error occured while logging in, please try again!"
        });
    }
}

module.exports = {registerUser, loginUser}