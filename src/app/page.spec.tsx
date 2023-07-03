import { render } from "@testing-library/react";
import Home from "./page";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("Home Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render home with 'Hello' message", () => {
    const { container, getByRole, getByText } = render(<Home />);

    expect(container.querySelector("#hello")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(getByText(/hello/i));
  });
});
