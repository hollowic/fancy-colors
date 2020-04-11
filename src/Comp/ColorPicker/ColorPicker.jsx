import React from "react";
import TabsHeader from "./TabsHeader";
import ColorRangeGroup from "./ColorRangeGroup";
import "./ColorPickerStyles.scss";

const ColorPicker = (props) => {
  return (
    <div className="adjust-color">
      <TabsHeader />
      <div className="hsv-tab tab">
        <ColorRangeGroup label="Hue" limit={360} />
        <ColorRangeGroup label="Saturation" limit={100} />
        <ColorRangeGroup label="Value" limit={100} />
      </div>

      <div className="rgb-tab tab">
        <ColorRangeGroup label="Red" limit={255} />
        <ColorRangeGroup label="Green" limit={255} />
        <ColorRangeGroup label="Blue" limit={255} />
      </div>

      <div className="pick-tab"></div>
    </div>
  );
};
export default ColorPicker;
