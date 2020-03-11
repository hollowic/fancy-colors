import React, { useState, useEffect } from "react";
import "./ContainerStyles.scss";
import StripeComp from "./Stripe";
import { generateRandomHexValue } from "../../Helpers/helperFn";

const Container = props => {
  const [colours, setColours] = useState({
    1: generateRandomHexValue(),
    2: generateRandomHexValue(),
    3: generateRandomHexValue(),
    4: generateRandomHexValue(),
    5: generateRandomHexValue()
  });

  const handleSpacebarPress = e => {
    if (e.keyCode === 32) {
      setColours({
        1: generateRandomHexValue(),
        2: generateRandomHexValue(),
        3: generateRandomHexValue(),
        4: generateRandomHexValue(),
        5: generateRandomHexValue()
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleSpacebarPress);
  }, []);

  return (
    <div id="container">
      <StripeComp backgroundColour={colours[1]} />
      <StripeComp backgroundColour={colours[2]} />
      <StripeComp backgroundColour={colours[3]} />
      <StripeComp backgroundColour={colours[4]} />
      <StripeComp backgroundColour={colours[5]} />
    </div>
  );
};
export default Container;
