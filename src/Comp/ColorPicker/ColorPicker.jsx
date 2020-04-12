import React, { useState, useEffect } from "react";
import TabsHeader from "./TabsHeader";
import ColorRangeGroup from "./ColorRangeGroup";
import ColorGradient from "./ColorGradient";
import "./ColorPickerStyles.scss";
import { HexToHSL, HexToRGB } from "../../Helpers/helperFn";

const ColorPicker = ({ initialValue }) => {
  const [active, setActive] = useState("hsl");
  const [HSLParams, setHSLParams] = useState([]);
  const [RGBParams, setRGBParams] = useState([]);

  useEffect(() => {
    setHSLParams(HexToHSL(initialValue));
    setRGBParams(HexToRGB(initialValue));
  }, [initialValue]);

  const handleActiveTab = (activateTab) => {
    setActive(activateTab);
  };

  return (
    <div className="adjust-color">
      <TabsHeader handleActiveTab={handleActiveTab} active={active} />
      <div
        className={
          active === "hsl" ? "hsl-tab tab visible" : "hsl-tab tab hidden"
        }
      >
        <ColorRangeGroup label="Hue" limit={360} initialValue={HSLParams[0]} />
        <ColorRangeGroup
          label="Saturation"
          limit={100}
          initialValue={HSLParams[1]}
        />
        <ColorRangeGroup
          label="Luminance"
          limit={100}
          initialValue={HSLParams[2]}
        />
      </div>
      <div
        className={
          active === "rgb" ? "rgb-tab tab visible" : "rgb-tab tab hidden"
        }
      >
        <ColorRangeGroup label="Red" limit={255} initialValue={RGBParams[0]} />
        <ColorRangeGroup
          label="Green"
          limit={255}
          initialValue={RGBParams[1]}
        />
        <ColorRangeGroup label="Blue" limit={255} initialValue={RGBParams[2]} />
      </div>
      <div
        className={
          active === "pick" ? "pick-tab tab visible" : "pick-tab tab hidden"
        }
      >
        <ColorGradient />
        <ColorRangeGroup label="Hue" limit={360} initialValue={HSLParams[0]} />
      </div>
    </div>
  );
};
export default ColorPicker;
