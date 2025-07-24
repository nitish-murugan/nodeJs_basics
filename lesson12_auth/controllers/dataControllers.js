const userObj = require('../models/user');
const fetchData = async (request, response)=>{
    const page = (request.query.page) || 1;
    const limit = (request.query.limit) || 1;
    const skip =  (page-1)*limit;

    const totalData = await userObj.countDocuments();
    console.log(totalData);
    const totalPages = Math.ceil(totalData/limit);
    const data = await userObj.find().sort({"price":1}).skip(skip).limit(limit);


    response.status(200).json({
        success: true,
        page: page,
        limit: limit,
        skip: skip,
        total: totalPages,
        data: data
    });
}

module.exports = fetchData;