const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    _id: {type:Number, required: true},
    tname: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true}
},{id: false});

const ingredientModel = mongoose.model('Ingredients', ingredientSchema, 'ingredients');

module.exports = ingredientModel;