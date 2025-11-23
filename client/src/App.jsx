// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

import Filters from "./Components/Filters";
import TilesRow from "./Components/TilesRow";
import ChartSection from "./Components/ChartSection";
import TableSection from "./Components/TableSection";

function App() {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-10");
  const [selectedShoe, setSelectedShoe] = useState("");
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = import.meta.env.VITE_URL;
  console.log(url);
  

  const metricLabels = {
    sales: "Sales",
    adCost: "Advertising Cost",
    impressions: "Impressions",
    clicks: "Clicks",
  };

  const fetchDashboard = async (
    start = startDate,
    end = endDate,
    shoe = selectedShoe,
    metricsArr = selectedMetrics
  ) => {
    if (!start || !end) {
      setError("Please select both start and end date.");
      return;
    }
    if (new Date(start) > new Date(end)) {
      setError("Start date cannot be after end date.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const params = {
        start,
        end,
      };

      if (shoe) params.shoeId = shoe;
      if (metricsArr.length > 0) params.metrics = metricsArr.join(",");

      const res = await axios.get(`${url}/dashboard`, {
        params,
      });
      console.log(res);
      setDashboardData(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const getShoeOptions = () => {
    if (!dashboardData || !dashboardData.table) return [];
    const map = new Map();
    dashboardData.table.forEach((row) => {
      if (!map.has(row.shoeId)) {
        map.set(row.shoeId, row.shoeName);
      }
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  };

  return (
    <div className="app-container">
      <h1>Brand Sales Analytics Dashboard</h1>

      <Filters
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        selectedShoe={selectedShoe}
        setSelectedShoe={setSelectedShoe}
        selectedMetrics={selectedMetrics}
        setSelectedMetrics={setSelectedMetrics}
        metricLabels={metricLabels}
        shoeOptions={getShoeOptions()}
        onApply={() =>
          fetchDashboard(startDate, endDate, selectedShoe, selectedMetrics)
        }
      />

      {error && <p className="error-text">{error}</p>}
      {loading && <p>Loading data...</p>}

      {!loading && dashboardData && (
        <>
          <TilesRow tiles={dashboardData.tiles} />

          <ChartSection
            chart={dashboardData.chart}
            selectedMetrics={selectedMetrics}
            metricLabels={metricLabels}
          />

          <TableSection
            table={dashboardData.table}
            grandTotals={dashboardData.grandTotals}
          />
        </>
      )}
    </div>
  );
}

export default App;
