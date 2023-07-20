import { render } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("should render the projects on section 'Projects'", () => {
    const { getByText } = render(<Projects />);

    expect(getByText(/Doctor's Website/i)).toBeInTheDocument();
  });
});
