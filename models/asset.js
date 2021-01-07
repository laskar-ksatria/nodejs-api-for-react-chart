const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    assets: {
        type: Number,
        default: 0,
    },
    stocks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stock'
        }
    ]
}, {versionKey: false, timestamps: {createdAt: 'createdAt'}})

const asset = mongoose.model('Asset', assetSchema);

module.exports = asset;