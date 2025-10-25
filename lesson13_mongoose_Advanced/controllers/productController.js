const { request } = require('express');
const productObj = require('../models/Products');
const addSampleProducts = async (request, response)=>{
    try{
        const sampleProducts = [
        {
            name: "Laptop",
            category: "Electronics",
            price: 999,
            inStock: true,
            tags: ["computer", "tech"],
        },
        {
            name: "Smartphone",
            category: "Electronics",
            price: 699,
            inStock: true,
            tags: ["mobile", "tech"],
        },
        {
            name: "Headphones",
            category: "Electronics",
            price: 199,
            inStock: false,
            tags: ["audio", "tech"],
        },
        {
            name: "Running Shoes",
            category: "Sports",
            price: 89,
            inStock: true,
            tags: ["footwear", "running"],
        },
        {
            name: "Novel",
            category: "Books",
            price: 15,
            inStock: true,
            tags: ["fiction", "bestseller"],
        },
        ];
        const addedProducts = await productObj.insertMany(sampleProducts);
        response.status(200).json({
            success: true,
            message: `Added ${addedProducts.length} successfully`
        });
    } catch(e){
        console.log(`Error occured: ${e}`);
        response.status(500).json({
            success: false,
            message: "Error occured!"
        });
    }   
}

const getProductStats = async (request, response)=>{
    try{
        const fetchedProducts = await productObj.aggregate([
            {$match:{inStock:true, price:{$gte:100}}},       //Satisfying certain conditions
            {$group:{_id:"$category",avgPrice:{$avg:"$price"},count:{$sum:1}}} // Grouping,average, counting the counts in the each group
        ]);
        response.status(200).json({
            success: true,
            message: fetchedProducts
        });
    } catch(e){
        console.log(`Error occured: ${e}`);
        response.status(500).json({
            success: false,
            message: "Error occured!"
        });
    }
}

const productAnalysis = async (request, response)=>{
    try{
        const filteredProducts = await productObj.aggregate([
            {$match:{category:"Electronics"}},
            {$group:{_id:null, totalRevenue:{$sum:"$price"}, avgPrice:{$avg:"$price"}, maxPrice:{$max:"$price"},minPrice:{$min:"$price"}}},
            {$project:{_id:0,totalRevenue:1,avgPrice:1,maxPrice:1,minPrice:1,priceRange:{$subtract:["$maxPrice","$minPrice"]}}}
        ]);
        response.status(200).json({
            success: true,
            message: filteredProducts
        });
    } catch(e){
        console.log(`Error occured: ${e}`);
        response.status(500).json({
            success: false,
            message: "Error occured!"
        });
    }
}

module.exports = {addSampleProducts,getProductStats,productAnalysis};