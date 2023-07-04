import { render } from "@testing-library/react";
import Home from "./page";

describe("Home Component", () => {
  it("should render home with 'Hello' message", () => {
    const { getByText } = render(<Home />);

    expect(getByText(/I'm Ewerton - Full Stack Developer & UI UX Designer/i));
    expect(getByText(/Web applications in React and Django./i));
  });
});
