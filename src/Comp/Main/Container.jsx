import React, { useState, useEffect } from "react";
import "./ContainerStyles.scss";
import StripeComp from "./Stripe";
import {
  generateRandomHexValue,
  HexToHSL,
  HSLToHex,
  HexToRGB,
  RGBToHex,
} from "../../Helpers/helperFn";

const Container = (props) => {
  const [colours, setColours] = useState([
    { ID: 1, colour: generateRandomHexValue(), isLocked: false },
    { ID: 2, colour: generateRandomHexValue(), isLocked: false },
    { ID: 3, colour: generateRandomHexValue(), isLocked: false },
    { ID: 4, colour: generateRandomHexValue(), isLocked: false },
    { ID: 5, colour: generateRandomHexValue(), isLocked: false },
  ]);

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
          return { ...el, colour: hexValue };
        } else {
          return el;
        }
      })
    );
  };

  const handleAdjustmentColourChange = (index, label, newValue) => {
    if (label === "Hue") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: HSLToHex([
                newValue,
                HexToHSL(prevState[i].colour)[1],
                HexToHSL(prevState[i].colour)[2],
              ]),
            };
          } else {
            return el;
          }
        })
      );
    }
    if (label === "Saturation") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: HSLToHex([
                HexToHSL(prevState[i].colour)[0],
                newValue,
                HexToHSL(prevState[i].colour)[2],
              ]),
            };
          } else {
            return el;
          }
        })
      );
    }
    if (label === "Luminance") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: HSLToHex([
                HexToHSL(prevState[i].colour)[0],
                HexToHSL(prevState[i].colour)[1],
                newValue,
              ]),
            };
          } else {
            return el;
          }
        })
      );
    }
    if (label === "Red") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: RGBToHex([
                newValue,
                HexToRGB(prevState[i].colour)[1],
                HexToRGB(prevState[i].colour)[2],
              ]),
            };
          } else {
            return el;
          }
        })
      );
    }
    if (label === "Green") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: RGBToHex([
                HexToRGB(prevState[i].colour)[0],
                newValue,
                HexToRGB(prevState[i].colour)[2],
              ]),
            };
          } else {
            return el;
          }
        })
      );
    }
    if (label === "Blue") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: RGBToHex([
                HexToRGB(prevState[i].colour)[0],
                HexToRGB(prevState[i].colour)[1],
                newValue,
              ]),
            };
          } else {
            return el;
          }
        })
      );
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
