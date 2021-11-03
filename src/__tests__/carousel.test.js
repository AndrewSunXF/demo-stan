import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";
import Carousel from "../components/Carousel";

test("show carousel", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Carousel />
    </Provider>
  );

  await waitFor(() => {
    screen.debug();
    expect(getByTestId("test-carousel")).toBeInTheDocument();
  });
});
