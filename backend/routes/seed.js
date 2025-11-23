const express = require('express');
const router = express.Router();
const shoeData = require('../models/ShoeStat')

router.get('/seed', async (req, res) => {
    try {

        const data = [
            {
                shoeId: "shoe_1",
                shoeName: "Nike Air",
                date: new Date("2025-01-01"),
                sales: 1600,
                adCost: 400,
                impressions: 30000,
                clicks: 900,
            },
            {
                shoeId: "shoe_1",
                shoeName: "Nike Air",
                date: new Date("2025-01-03"),
                sales: 1700,
                adCost: 300,
                impressions: 21000,
                clicks: 700,
            },
            {
                shoeId: "shoe_1",
                shoeName: "Nike Air",
                date: new Date("2025-01-04"),
                sales: 1500,
                adCost: 320,
                impressions: 22000,
                clicks: 900,
            },
            {
                shoeId: "shoe_2",
                shoeName: "Adidas Run",
                date: new Date("2025-01-10"),
                sales: 900,
                adCost: 250,
                impressions: 18000,
                clicks: 700,
            },
        ];

        await shoeData.insertMany(data);
        console.log(res);
        
        res.json({ message: 'Dummny Data inserted', count: data.length })
    } catch (error) {
        console.error(err);
        res.status(500).json({ err: `Seeding failed ${error}` })
    }
});

module.exports = router;