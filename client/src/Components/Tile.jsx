import React from "react";
import Tile from "./Tile";

function TilesRow({ tiles }) {
  if (!tiles) return null;

  return (
    <section className="row row-tiles">
      <Tile title="Total Sales" value={tiles.sales ?? 0} />
      <Tile title="Total Advertising Cost" value={tiles.adCost ?? 0} />
      <Tile title="Total Impressions" value={tiles.impressions ?? 0} />
      <Tile title="Total Clicks" value={tiles.clicks ?? 0} />
    </section>
  );
}

export default TilesRow;
