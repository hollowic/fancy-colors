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

// it("renders a default button style", () => {
//   const { getByText } = render(<Button>Default</Button>);
//   expect(getByText("Default")).toHaveClass("button");
// });

// it("renders a confirm button", () => {
//   const { getByText } = render(<Button confirm>Confirm</Button>);
//   expect(getByText("Confirm")).toHaveClass("button--confirm");
// });

// it("renders a danger button", () => {
//   const { getByText } = render(<Button danger>Danger</Button>);
//   expect(getByText("Danger")).toHaveClass("button--danger");
// });

// it("renders a clickable button", () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(
//     <Button onClick={handleClick}>Clickable</Button>
//   );

//   const button = getByText("Clickable");

//   fireEvent.click(button);

//   expect(handleClick).toHaveBeenCalledTimes(1);
// });

// it("renders a disabled button", () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(
//     <Button disabled onClick={handleClick}>
//       Disabled
//     </Button>
//   );

//   const button = getByText("Disabled");

//   fireEvent.click(button);

//   expect(handleClick).toHaveBeenCalledTimes(0);
// });
