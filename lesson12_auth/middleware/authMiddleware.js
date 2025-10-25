const jwt = require('jsonwebtoken');
module.exports = (request, response, next)=>{
    const authHeader = request.headers['authorization'];
    const bearerToken = authHeader.split(' ')[1];
    console.log(bearerToken);
    if(!bearerToken){
        response.json({
            success: false,
            message: "Access denied. Access token needed. Login again"
        });
    }
    try{
        const decodedData = jwt.verify(bearerToken,process.env.JWT_SECRET_KEY);
        console.log(decodedData);

        request.userInfo = decodedData;
        next();
    } catch(e){
        response.json({
            success: false,
            message: "Access denied. Access token needed. Login again"
        });
    }
}
