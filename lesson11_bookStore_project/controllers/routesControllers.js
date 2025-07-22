const express = require('express');
const bookObj = require('../models/books');
const getAllBooks = async (request, response)=>{
    try{
        const data = await bookObj.find({});
        if(data.length>0){
            return response.status(201).json({
                success: true,
                message: "Books fetched successfully",
                record: data
            });
        } else{
            return response.status(404).json({
                success: false,
                message: "Failed to fetch books"
            });
        }
    } catch(e){
        return response.status(404).json({
            success: false,
            message: "Failed to fetch books",
            error: e
        });
    }
};
const getParticularBook = async (request, response)=>{
    try{
        const neededBook = request.params.id;
        const data = await bookObj.find({_id: neededBook});
        if(data){
            return response.status(201).json({
                success: true,
                message: "Books fetched successfully",
                record: data
            });
        } else{
            return response.status(404).json({
                success: false,
                message: "No books found"
            });
        }
    } catch(e){
        return response.status(404).json({
            success: false,
            message: "Failed to fetch books",
            error: e
        });
    }
    
};
const addBook = async (request, response)=>{
    try{
        const data = request.body;
        const addedBook = await bookObj.create(data);
        if(addedBook){
            return response.status(201).json({
                success: true,
                message: "Book added successfully",
                record: addedBook
            });
        } else{
            return response.status(404).json({
                success: false,
                message: "Book failed to add"
            });
        }
    } catch(e){
        return response.status(404).json({
            success: false,
            message: "Book failed to add",
            error: e
        });
    }

};
const updateBook = async (request, response)=>{
    try{
        const neededBookId = request.params.id;
        const neededBook = await bookObj.find({_id: neededBookId});
        if(neededBook.length > 0){
            const data = request.body;
            const updatedBook = await bookObj.replaceOne({_id: neededBookId},data);
            if(updatedBook.modifiedCount > 0){
                return response.status(201).json({
                    success: true,
                    message: "Book updated successfully",
                    record: updatedBook
                });
            } else{
                return response.status(404).json({
                    success: false,
                    message: "Book failed to update"
                });
            }
        } else{
            return response.status(404).json({
                success: false,
                message: "No books found"
            });
        }
    } catch(e){
        return response.status(404).json({
            success: false,
            message: "Book failed to update",
            error: e
        });
    }
};
const deleteBook = async (request, response)=>{
    try{
        const neededBook = request.params.id;
        const data = await bookObj.findOneAndDelete({_id: neededBook});
        if(data){
            return response.status(201).json({
                success: true,
                message: "Books deleted successfully",
                record: data
            });
        } else{
            return response.status(404).json({
                success: false,
                message: "No books found"
            });
        }
    } catch(e){
        return response.status(404).json({
            success: false,
            message: "Failed to delete books",
            error: e
        });
    }
    
};

module.exports = {getAllBooks, getParticularBook, addBook, updateBook, deleteBook};