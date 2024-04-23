// Create product. (name, price, description, createdAt, updatedAt)

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product must have a name'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price']
    },
    description: {
        type: String,
        required: [true, 'A product must have a description']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;