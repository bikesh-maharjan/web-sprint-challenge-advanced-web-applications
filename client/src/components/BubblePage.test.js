import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorsData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd",
    },
    id: 5,
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba",
    },
    id: 6,
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99",
    },
    id: 7,
  },
];

test("Fetches data and renders the bubbles", () => {

  const { getByText } = render(<BubblePage />);
  const colors = getByText(/colors/i);
  expect(colors).toBeInTheDocument();

  const bubbles = getByText(/bubbles/i);
  expect(bubbles).toBeInTheDocument();

})






