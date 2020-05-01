import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import ColorRangeGroup from "../ColorPicker/ColorRangeGroup";

afterEach(cleanup);

it("given the initial param and label, renders without crashing", () => {
  render(<ColorRangeGroup initialParam={60} label={"Hue"} />);
});

it("given the initial param and label, renders the correct label", () => {
  const { getByText } = render(
    <ColorRangeGroup initialParam={60} label={"Hue"} />
  );
  expect(getByText("Hue")).toBeInTheDocument();
});

it("given the initial param and label, renders the correct initial value", () => {
  const { getByTestId } = render(
    <ColorRangeGroup initialParam={60} label={"Hue"} />
  );
  const textInput = getByTestId("input-text");
  expect(textInput).toHaveValue("60");
});

it("given the initial param and label, renders the correct initial value", () => {
  const { getByTestId } = render(
    <ColorRangeGroup initialParam={60} label={"Hue"} />
  );
  const textInput = getByTestId("input-text");
  expect(textInput).toHaveValue("60");
});

it("given the initial param and label, renders the remove icon and add icon", () => {
  const { getByTestId } = render(
    <ColorRangeGroup initialParam={60} label={"Hue"} />
  );

  expect(getByTestId("minusButton")).toHaveClass("minus");
  expect(getByTestId("plusButton")).toHaveClass("plus");
});

// it("given the initial param and label, renders the remove icon and add icon as clickable buttons", () => {
//   const handleClick = jest.fn();
//   const { getByTestId } = render(
//     <ColorRangeGroup
//       initialParam={60}
//       label={"Hue"}
//       handleAdjustmentColourChange={handleClick}
//     />
//   );

//   const minusButton = getByTestId("minusButton");

//   fireEvent.click(minusButton);

//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
