const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        required: [true, "Created At cannot be empty"]
    },
    assets: {
        type: Number,
        default: 0,
    },
});

const history = mongoose.model('History', historySchema)

module.exports = history;
