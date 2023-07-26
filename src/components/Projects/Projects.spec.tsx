import { render } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("should render the projects on section 'Future Projects'", () => {
    const { getByText } = render(<Projects />);

    expect(getByText(/Future Projects/i)).toBeInTheDocument();
  });
});
