const express = require('express');
const connectDB = require('../db/db');
const cartModel = require('../models/CartItem');

const cart_routes = express.Router();

// Insert an item to shopping cart collection

cart_routes.post('/', async (req,res) => {
    try
    {
        const newItem = await cartModel.create(req.body);
        res.status(201).json(newItem);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
});

// Update quantity of an item in the shopping cart

cart_routes.put('/:id', async (req,res) => {
    try
    {
        const updatedCart = await cartModel.findByIdAndUpdate(req.params.id, {quantity : req.body.quantity}, {new:true});
        if(!updatedCart)
            {
                res.status(404).json({message:'Item not found'});
            }
        else
            {
                res.json(updatedCart);
            }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
});

// Clear entire cart

cart_routes.delete('/', async (req, res) => {
    try {
        await cartModel.deleteMany({});

        res.json({
            message: 'Cart cleared successfully'
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

// Delete an item from the shopping cart.

cart_routes.delete('/:id', async (req,res) => {
    try
    {
        const deletedItem = await cartModel.findByIdAndDelete(req.params.id);
        if(!deletedItem)
            {
                res.status(404).json({message:'Item not found'});
            }
        else
            {
                res.json({message:'Item deleted successfully'});
            }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
})

// Fetch all items from the shopping cart.

cart_routes.get('/',async (req,res) => {
    try
    {
        const cartItems = await cartModel.find();
        res.json(cartItems);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: 'Server Error'});
    }
})

module.exports = cart_routes;