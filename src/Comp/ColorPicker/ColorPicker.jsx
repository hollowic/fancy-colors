import React, { useState, useEffect, useRef } from "react";
import TabsHeader from "./TabsHeader";
import ColorRangeGroup from "./ColorRangeGroup";
import ColorGradient from "./ColorGradient";
import "./ColorPickerStyles.scss";
import { hexToRgb, rgbToHsv } from "../../Helpers/helperFn";

const ColorPicker = ({
  index,
  visible,
  initialValue,
  handleAdjustmentColourChange,
}) => {
  const [active, setActive] = useState("hsb");
  const [HSVParams, setHSVParams] = useState([0, 0, 0]);
  const [RGBParams, setRGBParams] = useState([0, 0, 0]);
  const ref = useRef(null);

  useEffect(() => {
    setHSVParams(rgbToHsv(hexToRgb(initialValue)));
    setRGBParams(hexToRgb(initialValue));
  }, [initialValue]);

  useEffect(() => {
    if (visible) {
      ref.current.focus();
    }
  }, [visible]);

  const handleActiveTab = (activateTab) => {
    setActive(activateTab);
  };

  return (
    <div
      className={visible ? `adjust-color` : `adjust-color hidden`}
      tabIndex={index}
      ref={ref}
    >
      <TabsHeader handleActiveTab={handleActiveTab} active={active} />
      <div
        className={
          active === "hsb" ? "hsb-tab tab visible" : "hsb-tab tab hidden"
        }
      >
        <ColorRangeGroup
          label="Hue"
          index={index}
          limit={359}
          initialParam={HSVParams[0]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Saturation"
          index={index}
          limit={100}
          initialParam={HSVParams[1]}
          RGBParams={RGBParams}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Brightness"
          index={index}
          limit={100}
          initialParam={HSVParams[2]}
          RGBParams={RGBParams}
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
          RGBParams={RGBParams}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Green"
          index={index}
          limit={255}
          initialParam={RGBParams[1]}
          RGBParams={RGBParams}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
        <ColorRangeGroup
          label="Blue"
          index={index}
          limit={255}
          initialParam={RGBParams[2]}
          RGBParams={RGBParams}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
      </div>
      <div
        className={
          active === "pick" ? "pick-tab tab visible" : "pick-tab tab hidden"
        }
      >
        <ColorGradient RGBParams={RGBParams} />
        <ColorRangeGroup
          label="Hue"
          index={index}
          limit={359}
          initialParam={HSVParams[0]}
          handleAdjustmentColourChange={handleAdjustmentColourChange}
        />
      </div>
    </div>
  );
};
export default ColorPicker;
