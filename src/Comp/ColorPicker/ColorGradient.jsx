import React from "react";
import "./ColorGradientStyles.scss";
export default function ColorGradient({ RGBParams }) {
  return (
    <div
      className="color-gradient"
      style={{
        background: `rgb(${RGBParams[0]}, ${RGBParams[1]}, ${RGBParams[2]})`,
      }}
    >
      <div className="adjust-pick-s"></div>
      <div className="adjust-pick-v"></div>
      <div
        className="adjust-pick-handle"
        style={{ transform: "translate3d(190px, -98px, 0px)" }}
      ></div>
    </div>
  );
}
