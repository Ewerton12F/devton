import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render 'DevTon'", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText(/DevTon/i)).toBeInTheDocument();
    expect(getByText(/Projects/i)).toBeInTheDocument();
    expect(getByText(/What's next/i)).toBeInTheDocument();
  });
});
