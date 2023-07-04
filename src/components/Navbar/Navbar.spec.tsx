import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render 'DevTon' Link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/DevTon/i)).toBeInTheDocument();
  });
  it("should render 'Projects' Link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/Projects/i)).toBeInTheDocument();
  });
  it("should render 'What's next' Link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/What's next/i)).toBeInTheDocument();
  });
  it("should render 'Whatsapp' Button", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/Whatsapp/i)).toBeInTheDocument();
  });
  it("should render 'Github' Link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/Github/i)).toBeInTheDocument();
  });
});
