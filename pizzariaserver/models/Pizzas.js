const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    _id: { type: String, required: true },
    type: {type: String, required: true},
    price: {type: Number, required: true},
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    ingredients: {type: [String], required: true},
    topping: {type: [String], required: true}
},{id: false});


const pizzaModel = mongoose.model('Pizzas', pizzaSchema, 'pizzas');

module.exports = pizzaModel;