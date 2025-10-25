const bookObj = require('../models/Book');
const authorObj = require('../models/Author');

const createAuthor = async(request, response)=>{
    try{
        const addedAuthor = await authorObj.create(request.body);
        response.status(500).json({
            success: true,
            message: addedAuthor
        });
    } catch(e){
        console.log(`Error occured ${e}`);
        response.status(500).json({
            success: false,
            message: `Some error occured, ${e}`
        });
    }
};

const addBook = async(request, response)=>{
    try{
        const addedBook = await bookObj.create(request.body);
        response.status(500).json({
            success: true,
            message: addedBook
        });
    } catch(e){
        console.log(`Error occured ${e}`);
        response.status(500).json({
            success: false,
            message: `Some error occured, ${e}`
        });
    }
};

const getBookByAuthor = async(request, response)=>{
    try{
        const fetchedData = await bookObj.findById(request.params.id).populate('author');
        if(!fetchedData){
            response.status(404).json({
            success: false,
            message: "No books found"
        });
        }
        response.status(500).json({
            success: true,
            message: fetchedData
        });
    } catch(e){
        console.log(`Error occured ${e}`);
        response.status(500).json({
            success: false,
            message: `Some error occured, ${e}`
        });
    }
}

module.exports = {createAuthor, addBook, getBookByAuthor};