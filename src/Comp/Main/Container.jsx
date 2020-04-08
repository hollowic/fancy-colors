import React, { useState, useEffect } from "react";
import "./ContainerStyles.scss";
import StripeComp from "./Stripe";
import { generateRandomHexValue } from "../../Helpers/helperFn";

const Container = props => {
  const [colours, setColours] = useState([
    { colour: generateRandomHexValue(), isLocked: false },
    { colour: generateRandomHexValue(), isLocked: false },
    { colour: generateRandomHexValue(), isLocked: false },
    { colour: generateRandomHexValue(), isLocked: false },
    { colour: generateRandomHexValue(), isLocked: false }
  ]);

  const handleSpacebarPress = e => {
    if (e.key === " ") {
      setColours(prevState => {
        return prevState.map(el => {
          if (el.isLocked) {
            return el;
          } else {
            return { colour: generateRandomHexValue(), isLocked: false };
          }
        });
      });
    }
  };

  const handleLockClick = index => {
    setColours(
      colours.map((el, i) => {
        if (i === index) {
          const newLockedStatus = el.isLocked ? false : true;
          return { colour: el.colour, isLocked: newLockedStatus };
        } else {
          return el;
        }
      })
    );
  };

  // const handleColourChange = index => {
  //   setColours(colours.map(el, i));
  // };

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
            backgroundColour={el.colour}
            handleLockClick={handleLockClick}
            isLocked={el.isLocked}
          />
        );
      })}
    </div>
  );
};
export default Container;
