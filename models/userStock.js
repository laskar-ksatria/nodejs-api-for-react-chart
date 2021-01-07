const mongoose = require('mongoose');

const userStockSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    amount: {
        type: Number,
        required: [true, "Stock amount cannot be empty"]
    },
    price: {
        type: Number,
        required: [true, "Price cannot be empty"]
    },
    order_type: {
        type: String,
        required: [true, "Order type cannot be empty"]
    },
    total: {
        type: Number,
        required: [true, "Total cannot be empty"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {versionKey: false, timestamps: {createdAt: 'createdAt'}});

const UserStock = mongoose.model(`Stock`, userStockSchema);

module.exports = UserStock;

