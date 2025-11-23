import React from "react";

function TableSection({ table, grandTotals }) {
  return (
    <section className="row row-table">
      <h2 className="section-title">Shoe-wise Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Shoe Name</th>
            <th>Sales</th>
            <th>Advertising Cost</th>
            <th>Impressions</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {table && table.length > 0 ? (
            table.map((row) => (
              <tr key={row.shoeId}>
                <td>{row.shoeName}</td>
                <td>{row.sales}</td>
                <td>{row.adCost}</td>
                <td>{row.impressions}</td>
                <td>{row.clicks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No data for this range.
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>Grand Total</th>
            <th>{grandTotals?.sales ?? 0}</th>
            <th>{grandTotals?.adCost ?? 0}</th>
            <th>{grandTotals?.impressions ?? 0}</th>
            <th>{grandTotals?.clicks ?? 0}</th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default TableSection;
