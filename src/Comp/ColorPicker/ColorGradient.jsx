import React from "react";
import "./ColorGradientStyles.scss";
export default function ColorGradient() {
  return (
    <div className="color-gradient" style={{ background: "rgb(84, 0, 255)" }}>
      <div class="adjust-pick-s" data-value="27"></div>
      <div class="adjust-pick-v" data-value="65"></div>
      <div
        class="adjust-pick-handle"
        style={{ transform: "translate3d(190px, -98px, 0px)" }}
      ></div>
    </div>
  );
}
