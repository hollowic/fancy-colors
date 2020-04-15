import React, { useState, useEffect } from "react";
import "./AlternateShadesStyles.scss";
import { generateShades } from "../../../Helpers/helperFn";

export default function AlternateShades({ initialValue, visible }) {
  const [colorShades, setColorShades] = useState(generateShades(initialValue));

  useEffect(() => {
    setColorShades(generateShades(initialValue));
  }, [initialValue]);

  return (
    <div
      className={visible ? "alternate-container" : "alternate-container hidden"}
    >
      {colorShades.map((el) => {
        return (
          <div key={el} className="shades" style={{ background: el }}>
            <div>{el}</div>
          </div>
        );
      })}
    </div>
  );
}
