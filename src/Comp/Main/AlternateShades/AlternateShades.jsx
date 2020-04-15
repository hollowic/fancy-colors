import React, { useState, useEffect } from "react";
import "./AlternateShadesStyles.scss";
import { generateShades } from "../../../Helpers/helperFn";

export default function AlternateShades({ initialValue }) {
  const [colorShades, setColorShades] = useState([
    generateShades(initialValue),
  ]);

  //   useEffect(() => {
  //     setColorShades(generateShades(initialValue).flatMap((x) => x));
  //   }, [initialValue]);

  return (
    <div className="alternate-container">
      {colorShades.map((el) => {
        return el.map((el) => {
          return (
            <div key={el} className="shades" style={{ background: el }}>
              <div>{el}</div>
            </div>
          );
        });
      })}
    </div>
  );
}
