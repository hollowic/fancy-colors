import React, { useState, useRef, useEffect } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import AlternateShades from "./AlternateShades/AlternateShades";
import Tooltip from "@material-ui/core/Tooltip";
import "./StripeStyles.scss";
import { validateHexValue, hexToRgb } from "../../Helpers/helperFn";

const Stripe = ({
  ID,
  index,
  isLocked,
  handleLockClick,
  backgroundColour,
  handleEditColourChange,
  handleAdjustmentColourChange,
}) => {
  const [colour, setColour] = useState(backgroundColour);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [alternateShadeVisible, setAlternateShadeVisible] = useState(false);
  const textInput = useRef(null);

  useEffect(() => {
    setColour(backgroundColour);
  }, [backgroundColour]);

  const handleOnFocus = (e) => {
    e.target.focus();
    textInput.current.setSelectionRange(1, 7);
  };

  const handleOnChange = (e) => {
    const regex = /[#0-9A-F]/i;

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setColour(e.target.value);
    }

    if (regex.test(e.nativeEvent.data)) {
      setColour(e.target.value);
    }
  };

  const submitColour = (currentValue) => {
    //To do: write tests for this, manual testing is not enough
    if (!validateHexValue(currentValue)) {
      setColour(backgroundColour);
    } else {
      if (currentValue[0] !== "#" && currentValue.length === 3) {
        currentValue = currentValue
          .split("")
          .map((hex) => {
            return hex + hex;
          })
          .join("");
        currentValue = "#" + currentValue;
      }
      if (currentValue[0] === "#" && currentValue.length === 4) {
        currentValue = currentValue
          .split("")
          .map((hex) => {
            return hex + hex;
          })
          .join("");
        currentValue = currentValue.substring(1, currentValue.length);
      }
      if (currentValue.length === 6) {
        currentValue = "#" + currentValue;
      }
      handleEditColourChange(index, currentValue);
    }
  };

  const handleAdjustClick = () => {
    setColorPickerVisible((prevState) => !prevState);
  };

  const handleAlternateShadeClick = () => {
    setAlternateShadeVisible((prevState) => !prevState);
  };

  return (
    <div
      className="single-stripe"
      style={{ backgroundColor: backgroundColour }}
    >
      <AlternateShades
        index={index}
        initialValue={backgroundColour}
        visible={alternateShadeVisible}
        handleEditColourChange={handleEditColourChange}
        handleAlternateShadeClick={handleAlternateShadeClick}
      />

      <Tooltip title="Alternative shades" arrow placement="top">
        <i className="fas fa-th" onClick={handleAlternateShadeClick} />
      </Tooltip>

      <Tooltip title="Drag" arrow placement="top">
        <i className="fas fa-arrows-alt-h" />
      </Tooltip>

      <Tooltip title="Adjust" arrow placement="top">
        <i className="fas fa-sliders-h" onClick={handleAdjustClick} />
      </Tooltip>

      <ColorPicker
        initialValue={backgroundColour}
        index={index}
        handleAdjustmentColourChange={handleAdjustmentColourChange}
        visible={colorPickerVisible}
        handleAdjustClick={handleAdjustClick}
      />

      {isLocked ? (
        <Tooltip title="Unlock" arrow placement="top">
          <i
            className="fas fa-lock"
            onClick={() => handleLockClick(index)}
            style={{ visibility: "visible", opacity: 1 }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Lock" arrow placement="top">
          <i
            className="fas fa-lock-open"
            onClick={() => handleLockClick(index)}
          />
        </Tooltip>
      )}

      <Tooltip title="Edit" arrow placement="top">
        <input
          className="edit-color"
          disabled={isLocked}
          ref={textInput}
          type="text"
          maxLength="7"
          value={colour}
          onFocus={handleOnFocus}
          onChange={handleOnChange}
          onBlur={(e) => submitColour(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitColour(e.target.value);
              textInput.current.blur();
            }
          }}
        />
      </Tooltip>

      <div className="color-info">
        <div className="color-info-name"></div>
        <div className="color-info-rgb">{`RGB: ${
          hexToRgb(backgroundColour)[0]
        }, ${hexToRgb(backgroundColour)[1]}, ${
          hexToRgb(backgroundColour)[2]
        }`}</div>
        <div className="color-info-hsv"></div>
        <div className="color-info-cmyk"></div>
      </div>
    </div>
  );
};
export default Stripe;
