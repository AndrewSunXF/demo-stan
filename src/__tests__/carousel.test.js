import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Carousel from "../components/Carousel";

test("show carousel", () => {
  render(<Carousel />);

  screen.debug();
});
