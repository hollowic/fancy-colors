import React, { useState, useEffect } from "react";
import "./AlternateShadesStyles.scss";
import { generateShades } from "../../../Helpers/helperFn";

export default function AlternateShades({
  index,
  visible,
  initialValue,
  handleEditColourChange,
  handleAlternateShadeClick,
}) {
  const [colorShades, setColorShades] = useState(generateShades(initialValue));

  useEffect(() => {
    setColorShades(generateShades(initialValue));
  }, [initialValue]);

  return (
    <div
      className={visible ? "alternate-container" : "alternate-container hidden"}
    >
      {colorShades.map((el, i) => {
        return (
          <div
            key={`${i}-${el}`}
            className="shades"
            style={{ background: el }}
            onClick={() => {
              handleAlternateShadeClick(index, el);
            }}
          >
            <div>{el}</div>
          </div>
        );
      })}
    </div>
  );
}
