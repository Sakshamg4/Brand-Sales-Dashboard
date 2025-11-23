const mongoose = require('mongoose');

const shoeStatSchema = new mongoose.Schema(
    {
        shoeId: String,
        shoeName: String,
        date: Date,
        sales: Number,
        adCost: Number,
        impressions: Number,
        clicks: Number,
    }
)

module.exports = mongoose.model('ShoeSchema', shoeStatSchema);
