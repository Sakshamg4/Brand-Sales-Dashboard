import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function ChartSection({ chart, selectedMetrics, metricLabels }) {
  if (!chart || !chart.labels || chart.labels.length === 0) {
    return (
      <section className="row row-chart">
        <h2>Metrics Trend</h2>
        <p>No chart data available for selected filters.</p>
      </section>
    );
  }

  const colors = [
    "rgb(47, 210, 210)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
  ];

  const datasets = selectedMetrics.map((metricKey, index) => {
    const data = chart.series[metricKey];
    if (!data) return null;
    return {
      label: metricLabels[metricKey] || metricKey,
      data,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length],
      fill: false,
      tension: 0.2,
    };
  }).filter(Boolean);

  const data = {
    labels: chart.labels,
    datasets,
  };
  console.log("lables",data.labels);
  console.log("datasets",data.datasets);
  

  return (
    <section className="row row-chart">
      <h2 className="metricsClass">Metrics Trend</h2>
      <Line data={data} />
    </section>
  );
}

export default ChartSection;
