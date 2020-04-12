import React, { useState, useEffect, useContext } from "react";
import "./ContainerStyles.scss";
import StripeComp from "./Stripe";
import {
  generateRandomHexValue,
  HexToHSL,
  HSLToHex,
  HexToRGB,
  RGBToHSL,
} from "../../Helpers/helperFn";

const Container = (props) => {
  const [colours, setColours] = useState([
    { ID: 1, colour: generateRandomHexValue(), isLocked: false },
    { ID: 2, colour: generateRandomHexValue(), isLocked: false },
    { ID: 3, colour: generateRandomHexValue(), isLocked: false },
    { ID: 4, colour: generateRandomHexValue(), isLocked: false },
    { ID: 5, colour: generateRandomHexValue(), isLocked: false },
  ]);

  const adjustmentContext = useContext(colours);
  //#AADDFF (Hue+1) => #AADBFF

  const handleSpacebarPress = (e) => {
    if (e.key === " ") {
      setColours((prevState) => {
        return prevState.map((el) => {
          if (el.isLocked) {
            return el;
          } else {
            return { ...el, colour: generateRandomHexValue() };
          }
        });
      });
    }
  };

  const handleLockClick = (index) => {
    setColours(
      colours.map((el, i) => {
        if (i === index) {
          const newLockedStatus = el.isLocked ? false : true;
          return { ...el, isLocked: newLockedStatus };
        } else {
          return el;
        }
      })
    );
  };

  const handleEditColourChange = (index, hexValue) => {
    setColours(
      colours.map((el, i) => {
        if (i === index) {
          return { colour: hexValue, isLocked: false };
        } else {
          return el;
        }
      })
    );
  };

  const handleAdjustmentColourChange = (index, label) => {
    if (label === "Hue") {
    }
    if (label === "Saturation") {
    }
    if (label === "Luminance") {
    }
    if (label === "Red") {
    }
    if (label === "Green") {
    }
    if (label === "Blue") {
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleSpacebarPress);
  }, []);

  return (
    <div id="container">
      {colours.map((el, i) => {
        return (
          <StripeComp
            key={i}
            index={i}
            isLocked={el.isLocked}
            backgroundColour={el.colour}
            handleLockClick={handleLockClick}
            handleEditColourChange={handleEditColourChange}
            handleAdjustmentColourChange={handleAdjustmentColourChange}
          />
        );
      })}
    </div>
  );
};
export default Container;
