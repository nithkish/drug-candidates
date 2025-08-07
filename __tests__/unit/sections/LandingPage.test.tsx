import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "@/sections/landing-page/LandingPage";
import { useTheme } from "next-themes";
import { SignInButton } from "@clerk/nextjs";

// Mock next-themes useTheme hook
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

// Mock @clerk/nextjs SignInButton component
jest.mock("@clerk/nextjs", () => ({
  SignInButton: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
}));

// Mock next/image to simply render an img element
jest.mock("next/image", () => (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { src, alt, width, height, ...rest } = props;
  return <img src={src} alt={alt} {...rest} />;
});

describe("LandingPage", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ resolvedTheme: "light" });
  });

  it("renders the landing page with correct content and accessibility attributes", () => {
    render(<LandingPage />);

    const section = screen.getByRole("region", {
      name: /welcome to drug discovery/i,
    });
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: /drug discovery/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "landing-title");
    expect(heading).toHaveAttribute("tabIndex", "-1");

    const logo = screen.getByAltText(/drug discovery platform logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.png");

    const signInButton = screen.getByRole("button", {
      name: /sign in to start exploring/i,
    });
    expect(signInButton).toBeInTheDocument();
  });

  it("passes dark theme to SignInButton when resolvedTheme is dark", () => {
    (useTheme as jest.Mock).mockReturnValue({ resolvedTheme: "dark" });

    render(<LandingPage />);

    expect(SignInButton).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "modal",
        appearance: expect.objectContaining({
          baseTheme: expect.any(Object), // dark theme object
        }),
      }),
      expect.anything()
    );
  });

  it("passes undefined baseTheme to SignInButton when resolvedTheme is not dark", () => {
    (useTheme as jest.Mock).mockReturnValue({ resolvedTheme: "light" });

    render(<LandingPage />);

    expect(SignInButton).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "modal",
        appearance: expect.objectContaining({
          baseTheme: undefined,
        }),
      }),
      expect.anything()
    );
  });
});
