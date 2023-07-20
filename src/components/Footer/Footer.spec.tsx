import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render 'Footer'", () => {
    const { getByText } = render(<Footer />);

    expect(getByText(/DevTon/i)).toBeInTheDocument();
  });
  it("should render 'Whatsapp' Button", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Whatsapp/i)).toBeInTheDocument();
  });
  it("should render 'Github' Link", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Github/i)).toBeInTheDocument();
  });
});
