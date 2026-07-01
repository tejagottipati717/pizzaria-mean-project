const express = require('express');

const connectDB = require('../db/db');

const ingredientModel = require('../models/Ingredients');

const ingredient_routes = express.Router();

// Fetch all ingredients from ingredients collection.

ingredient_routes.get("/", async (req,res) =>{
    try
    {
        const ingredients = await ingredientModel.find();
        res.json(ingredients);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
});

module.exports = ingredient_routes;