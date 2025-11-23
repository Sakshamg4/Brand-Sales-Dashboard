const express = require('express');
const router = express.Router();
const shoeData = require('../models/ShoeStat')

router.get("/dashboard", async (req, res) => {
    try {
      const { start, end, shoeId, metrics } = req.query;
  
      const startDate = new Date(start);
      const endDate = new Date(end);
  
      const metricsArray = metrics
        ? metrics.split(",")
        : ["sales", "adCost", "impressions", "clicks"];
  
      const tilesAgg = await shoeData.aggregate([
        {
          $match: {
            date: { $gte: startDate, $lte: endDate }
          }
        },
        {
          $group: {
            _id: null,
            totalSales: { $sum: "$sales" },
            totalAdCost: { $sum: "$adCost" },
            totalImpressions: { $sum: "$impressions" },
            totalClicks: { $sum: "$clicks" }
          }
        }
      ]);

  
      const tiles = tilesAgg[0] || {
        totalSales: 0,
        totalAdCost: 0,
        totalImpressions: 0,
        totalClicks: 0
      };
  
      const matchForChart = {
        date: { $gte: startDate, $lte: endDate },
      };
  
      if (shoeId) {
        matchForChart.shoeId = shoeId;
      }
  
      const chartAgg = await shoeData.aggregate([
        { $match: matchForChart },
        {
          $group: {
            _id: "$date",
            sales: { $sum: "$sales" },
            adCost: { $sum: "$adCost" },
            impressions: { $sum: "$impressions" },
            clicks: { $sum: "$clicks" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

  
      const labels = [];
      const series = {
        sales: [],
        adCost: [],
        impressions: [],
        clicks: [],
      };
  
      chartAgg.forEach((item) => {
        const dateStr = item._id.toISOString().split("T")[0];
        labels.push(dateStr);
        series.sales.push(item.sales);
        series.adCost.push(item.adCost);
        series.impressions.push(item.impressions);
        series.clicks.push(item.clicks);
      });
  
      const selectedSeries = {};
      metricsArray.forEach((m) => {
        if (series[m] !== undefined) {
          selectedSeries[m] = series[m];
        }
      });
  
      const chart = {
        labels,
        series: selectedSeries,
      };
  
      // 4) TABLE: totals per shoe
      const tableAgg = await shoeData.aggregate([
        {
          $match: {
            date: { $gte: startDate, $lte: endDate },
          },
        },
        {
          $group: {
            _id: { shoeId: "$shoeId", shoeName: "$shoeName" },
            sales: { $sum: "$sales" },
            adCost: { $sum: "$adCost" },
            impressions: { $sum: "$impressions" },
            clicks: { $sum: "$clicks" },
          },
        },
        {
          $project: {
            _id: 0,
            shoeId: "$_id.shoeId",
            shoeName: "$_id.shoeName",
            sales: 1,
            adCost: 1,
            impressions: 1,
            clicks: 1,
          },
        },
        { $sort: { sales: -1 } },
      ]);

      console.log(tableAgg);
      
  
      // 5) GRAND TOTALS
      const grandTotals = {
        sales: tiles.totalSales || 0,
        adCost: tiles.totalAdCost || 0,
        impressions: tiles.totalImpressions || 0,
        clicks: tiles.totalClicks || 0,
      };
  
      // 6) Final response
      res.json({
        tiles: {
          sales: tiles.totalSales,
          adCost: tiles.totalAdCost,
          impressions: tiles.totalImpressions,
          clicks: tiles.totalClicks,
        },
        chart,
        table: tableAgg,
        grandTotals,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Dashboard fetch failed" });
    }
  });


module.exports = router;
