import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("should render main message", () => {
    const { getByText } = render(<Hero />);

    expect(getByText(/I'm Ewerton - Full Stack Developer & UI UX Designer/i));
  });
  it("should render secondary message", () => {
    const { getByText } = render(<Hero />);

    expect(
      getByText(
        /Creation and maintance of web applications in React and Django./i
      )
    );
  });
});
