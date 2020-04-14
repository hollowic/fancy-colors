import React from "react";
import "./TabsHeaderStyles.scss";

export default function TabsHeader({ active, handleActiveTab }) {
  return (
    <div className="tabs-header">
      <ul>
        <li
          label="hsb"
          className={active === "hsb" ? "active" : "inactive"}
          onClick={() => handleActiveTab("hsb")}
        >
          HSB
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
