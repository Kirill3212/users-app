import { render, screen } from "@testing-library/react";
import App from "../App";

test("Start the App", () => {
  render(<App />);
  const headerTitle = screen.getByText(/Users App/i);
  expect(headerTitle).toBeVisible();
});
