const express = require('express');
const authMiddleware = require("../middleware/authMiddleware");
const fetchData = require('../controllers/dataControllers');
const router = express.Router();

router.get('/welcome', authMiddleware, (request, response)=>{
    const {userId, username, role} = request.userInfo;
    response.json({
        message: "Welcome to the home page",
        userData: {
            userId: userId,
            username: username,
            role: role
        }
    });
});

router.get('/data',fetchData);

module.exports = router;