import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "@/sections/nav-bar/NavBar";

// Mock next/image to render a simple img element
jest.mock("next/image", () => (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { src, alt, ...rest } = props;
  return <img src={src} alt={alt} {...rest} />;
});

// Mock NavButtons component
jest.mock("@/components/nav-buttons/NavButtons", () => () => (
  <div data-testid="nav-buttons" />
));

describe("NavBar", () => {
  it("renders navigation bar with correct roles and labels", () => {
    render(<NavBar />);

    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(nav).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /go to home page/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const logoImg = screen.getByAltText(/drug discovery platform logo/i);
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "/logo.png");

    const navButtonsGroup = screen.getByRole("group", {
      name: /primary navigation/i,
    });
    expect(navButtonsGroup).toBeInTheDocument();

    // Ensure NavButtons component is rendered inside the navButtonsGroup
    expect(screen.getByTestId("nav-buttons")).toBeInTheDocument();
  });
});
