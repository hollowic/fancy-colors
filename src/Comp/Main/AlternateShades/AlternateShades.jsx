import React, { useState } from "react";

export default function AlternateShades({ initialValue }) {
  const [colorShades, setColorShades] = useState([]);

  return (
    <div className="alternate-container">
      {colorShades.map((el, i) => {
        return <div></div>;
      })}
    </div>
  );
}
