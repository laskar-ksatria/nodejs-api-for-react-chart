const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Company name cannot be empty"]
    },
},{versionKey: false, timestamps: {createdAt: 'createdAt'}});

const company = mongoose.model('Company', companySchema);

module.exports = company;