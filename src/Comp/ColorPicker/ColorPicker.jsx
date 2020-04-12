import React, { useState, useEffect } from "react";
import TabsHeader from "./TabsHeader";
import ColorRangeGroup from "./ColorRangeGroup";
import ColorGradient from "./ColorGradient";
import "./ColorPickerStyles.scss";
import { HexToHSL, HexToRGB } from "../../Helpers/helperFn";

const ColorPicker = ({ initialValue, index, handleAdjustmentColourChange }) => {
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
        <ColorRangeGroup
          label="Hue"
          index={index}
          limit={360}
          initialParam={HSLParams[0]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Saturation"
          index={index}
          limit={100}
          initialParam={HSLParams[1]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Luminance"
          index={index}
          limit={100}
          initialParam={HSLParams[2]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
      </div>
      <div
        className={
          active === "rgb" ? "rgb-tab tab visible" : "rgb-tab tab hidden"
        }
      >
        <ColorRangeGroup
          label="Red"
          index={index}
          limit={255}
          initialParam={RGBParams[0]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Green"
          index={index}
          limit={255}
          initialParam={RGBParams[1]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Blue"
          index={index}
          limit={255}
          initialParam={RGBParams[2]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
      </div>
      <div
        className={
          active === "pick" ? "pick-tab tab visible" : "pick-tab tab hidden"
        }
      >
        <ColorGradient />
        <ColorRangeGroup
          label="Hue"
          index={index}
          limit={360}
          initialParam={HSLParams[0]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
      </div>
    </div>
  );
};
export default ColorPicker;
