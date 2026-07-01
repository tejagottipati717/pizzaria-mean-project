const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    itemType: {type: String},
    name: {type:String},
    price: {type:Number},
    quantity:{type: Number},
    image: {type: String},
    vegType: {type: String},
    selectedIngredients: {type: [String]}
});

const cartItemModel = mongoose.model('CartItem', cartItemSchema,'shoppingcart');

module.exports = cartItemModel;