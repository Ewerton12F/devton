import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  let hero: any;
  beforeEach(() => {
    hero = render(<Hero />);
  });

  it("should render main message", () => {
    expect(hero.getByText(/Hi, I'm Ewerton! Full Stack Developer/i));
  });
  it("should render secondary message", () => {
    expect(
      hero.getByText(
        /Creation and maintance of web applications in React and Django./i
      )
    );
  });
  it("should render 'I'm also a beginner as UIUX Designer' message", () => {
    expect(hero.getByText(/I'm also a beginner as UIUX Designer/i));
  });
});
