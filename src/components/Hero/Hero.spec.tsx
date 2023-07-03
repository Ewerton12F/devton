import { render } from "@testing-library/react";
import Hero from "./Hero";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("Hero Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render hero with 'I'm Ewerton - Full Stack Developer & UI / UX Designer' message", () => {
    const { getByText } = render(<Hero />);

    expect(getByText(/I'm Ewerton - Full Stack Developer & UI UX Designer/i));
  });
});
