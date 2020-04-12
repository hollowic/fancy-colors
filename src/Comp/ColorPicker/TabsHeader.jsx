import React from "react";
import "./TabsHeaderStyles.scss";

export default function TabsHeader({ active, handleActiveTab }) {
  return (
    <div className="tabs-header">
      <ul>
        <li
          label="hsl"
          className={active === "hsl" ? "active" : "inactive"}
          onClick={() => handleActiveTab("hsl")}
        >
          HSL
        </li>
        <li
          label="rgb"
          className={active === "rgb" ? "active" : "inactive"}
          onClick={() => handleActiveTab("rgb")}
        >
          RGB
        </li>
        <li
          label="pick"
          className={active === "pick" ? "active" : "inactive"}
          onClick={() => handleActiveTab("pick")}
        >
          PICK
        </li>
      </ul>
    </div>
  );
}
