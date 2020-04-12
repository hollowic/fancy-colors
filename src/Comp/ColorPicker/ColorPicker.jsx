import React, { useState } from "react";
import TabsHeader from "./TabsHeader";
import ColorRangeGroup from "./ColorRangeGroup";
import ColorGradient from "./ColorGradient";
import "./ColorPickerStyles.scss";

const ColorPicker = ({ initialValue }) => {
  const [active, setActive] = useState("hsv");

  const handleActiveTab = (activateTab) => {
    setActive(activateTab);
  };

  return (
    <div className="adjust-color">
      <TabsHeader handleActiveTab={handleActiveTab} active={active} />
      <div
        className={
          active === "hsv" ? "hsv-tab tab visible" : "hsv-tab tab hidden"
        }
      >
        <ColorRangeGroup label="Hue" limit={360} />
        <ColorRangeGroup label="Saturation" limit={100} />
        <ColorRangeGroup label="Value" limit={100} />
      </div>

      <div
        className={
          active === "rgb" ? "rgb-tab tab visible" : "rgb-tab tab hidden"
        }
      >
        <ColorRangeGroup label="Red" limit={255} />
        <ColorRangeGroup label="Green" limit={255} />
        <ColorRangeGroup label="Blue" limit={255} />
      </div>

      <div
        className={
          active === "pick" ? "pick-tab tab visible" : "pick-tab tab hidden"
        }
      >
        <ColorGradient />
        <ColorRangeGroup label="Hue" limit={360} />
      </div>
    </div>
  );
};
export default ColorPicker;
