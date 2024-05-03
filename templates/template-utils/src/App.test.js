import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn hiro docs link", () => {
  render(<App />);
  const element = screen.getByText(/hiro docs/i);
  expect(element).toBeInTheDocument();
});
