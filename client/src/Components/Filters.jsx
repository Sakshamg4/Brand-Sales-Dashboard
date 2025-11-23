import React from "react";

function Filters({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  selectedShoe,
  setSelectedShoe,
  selectedMetrics,
  setSelectedMetrics,
  metricLabels,
  shoeOptions,
  onApply,
}) {
  const handleMetricToggle = (metricKey) => {
    const alreadySelected = selectedMetrics.includes(metricKey);

    if (alreadySelected) {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metricKey));
    } else {
      if (selectedMetrics.length >= 2) {
        alert("You can select maximum 2 metrics.");
        return;
      }
      setSelectedMetrics([...selectedMetrics, metricKey]);
    }

  };

  const cleanMeticsOption = () => {
    setSelectedMetrics([]);
    console.log("Metrics cleared");
  };
  
  return (
    <section className="row row-filters filters-card">
      <div className="filter-group">
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Shoe</label>
        <select
          value={selectedShoe}
          onChange={(e) => setSelectedShoe(e.target.value)}
        >
          <option value="">All Shoes</option>
          {shoeOptions.map((shoe) => (
            <option key={shoe.id} value={shoe.id}>
              {shoe.name}
            </option>
          ))}
        </select>
      </div>

     
      <div className="filter-group metrics-group">
        <label>
          Metrics <span className="metrics-cap">(max 2)</span>
        </label>
        <div className="metrics-options">
          {Object.keys(metricLabels).map((key) => {
            const active = selectedMetrics.includes(key);
            return (
              <button
                key={key}
                type="button"
                className={
                  "metrics-chip" + (active ? " metrics-chip--active" : "")
                }
                onClick={() => handleMetricToggle(key)}
              >
                <span className="metrics-chip-dot" />
                {metricLabels[key]}
              </button>
            );
          })}
        </div>
        <small className="metrics-hint">Choose up to 2 metrics.</small>
        <button className="clean-button" onClick={cleanMeticsOption}>
  Clear Metrics
</button>

      </div>

      <button className="apply-button" onClick={onApply}>
        Apply Filters
      </button>
    </section>
  );
}

export default Filters;
