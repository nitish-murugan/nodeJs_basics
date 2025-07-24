module.exports = (request, response, next)=>{
    const userData = request.userInfo;
    if(userData.role != "admin"){
        response.json({
            success: false,
            message: "Admin access reserved. Try contacting admin"
        });
    }
    
    console.log("Yes, you are admin");
    next();
}