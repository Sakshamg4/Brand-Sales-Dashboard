import React from "react";

function Tile({ title, value }) {
  return (
    <div className="tile">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Tile;
