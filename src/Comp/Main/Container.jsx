import React, { useState, useEffect } from "react";
import "./ContainerStyles.scss";
import StripeComp from "./Stripe";
import {
  generateRandomHexValue,
  hexToRgb,
  rgbToHex,
  rgbToHsv,
  hsvToRgb,
} from "../../Helpers/helperFn";

const Container = ({ innerRef }) => {
  const [colours, setColours] = useState([
    {
      ID: 1,
      colour: generateRandomHexValue(),
      isLocked: false,
      colorPickerVisible: false,
      alternateShadeVisible: false,
    },
    {
      ID: 2,
      colour: generateRandomHexValue(),
      isLocked: false,
      colorPickerVisible: false,
      alternateShadeVisible: false,
    },
    {
      ID: 3,
      colour: generateRandomHexValue(),
      isLocked: false,
      colorPickerVisible: false,
      alternateShadeVisible: false,
    },
    {
      ID: 4,
      colour: generateRandomHexValue(),
      isLocked: false,
      colorPickerVisible: false,
      alternateShadeVisible: false,
    },
    {
      ID: 5,
      colour: generateRandomHexValue(),
      isLocked: false,
      colorPickerVisible: false,
      alternateShadeVisible: false,
    },
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

  const handleAdjustClick = (index) => {
    setColours(
      colours.map((el, i) => {
        if (i === index) {
          const newDisplayStatus = el.colorPickerVisible ? false : true;
          return { ...el, colorPickerVisible: newDisplayStatus };
        } else {
          return el;
        }
      })
    );
  };

  const handleAlternateShadeClick = (index, hexValue) => {
    if (hexValue) {
      setColours(
        colours.map((el, i) => {
          if (i === index) {
            const newDisplayStatus = el.alternateShadeVisible ? false : true;
            return {
              ...el,
              alternateShadeVisible: newDisplayStatus,
              colour: hexValue,
            };
          } else {
            return el;
          }
        })
      );
    } else {
      setColours(
        colours.map((el, i) => {
          if (i === index) {
            const newDisplayStatus = el.alternateShadeVisible ? false : true;
            return { ...el, alternateShadeVisible: newDisplayStatus };
          } else {
            return el;
          }
        })
      );
    }
  };

  const handleAdjustmentColourChange = (index, label, newValue) => {
    if (label === "Hue") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: rgbToHex(
                hsvToRgb([
                  newValue,
                  rgbToHsv(hexToRgb(prevState[i].colour))[1],
                  rgbToHsv(hexToRgb(prevState[i].colour))[2],
                ])
              ),
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
              colour: rgbToHex(
                hsvToRgb([
                  rgbToHsv(hexToRgb(prevState[i].colour))[0],
                  newValue,
                  rgbToHsv(hexToRgb(prevState[i].colour))[2],
                ])
              ),
            };
          } else {
            return el;
          }
        })
      );
    }
    if (label === "Brightness") {
      setColours((prevState) =>
        colours.map((el, i) => {
          if (i === index) {
            return {
              ...el,
              colour: rgbToHex(
                hsvToRgb([
                  rgbToHsv(hexToRgb(prevState[i].colour))[0],
                  rgbToHsv(hexToRgb(prevState[i].colour))[1],
                  newValue,
                ])
              ),
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
              colour: rgbToHex([
                newValue,
                hexToRgb(prevState[i].colour)[1],
                hexToRgb(prevState[i].colour)[2],
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
              colour: rgbToHex([
                hexToRgb(prevState[i].colour)[0],
                newValue,
                hexToRgb(prevState[i].colour)[2],
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
              colour: rgbToHex([
                hexToRgb(prevState[i].colour)[0],
                hexToRgb(prevState[i].colour)[1],
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
            ID={String(el.ID)}
            isLocked={el.isLocked}
            backgroundColour={el.colour}
            colorPickerVisible={el.colorPickerVisible}
            alternateShadeVisible={el.alternateShadeVisible}
            handleLockClick={handleLockClick}
            handleAdjustClick={handleAdjustClick}
            handleAlternateShadeClick={handleAlternateShadeClick}
            handleEditColourChange={handleEditColourChange}
            handleAdjustmentColourChange={handleAdjustmentColourChange}
          />
        );
      })}
    </div>
  );
};
export default Container;
