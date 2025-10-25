const express = require('express');
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const router = express.Router();

router.get('/welcome', authMiddleware, adminMiddleware, (request, response)=>{
    response.json({
        success: true,
        message: "Welcome to admin page"
    });
});

module.exports = router;