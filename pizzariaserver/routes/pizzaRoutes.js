const express = require('express');
const connectDB = require('../db/db');
const pizzaModel = require('../models/Pizzas');

const pizza_routes = express.Router();

//Fetch all pizzas from pizzas collection.

pizza_routes.get('/', async (req,res) => {
    try
    {
        const pizzas = await pizzaModel.find();
        res.json(pizzas);}
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
});

module.exports = pizza_routes;