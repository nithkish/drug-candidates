import React from "react";
import { render, screen } from "@testing-library/react";
import NavButtons from "@/components/nav-buttons/NavButtons";
import { useAuth } from "@clerk/nextjs";
import { useTheme } from "next-themes";

// Mock external dependencies

jest.mock("@clerk/themes", () => ({
  dark: {},
}));

jest.mock("@clerk/nextjs", () => ({
  useAuth: jest.fn(),
  SignInButton: ({ children }: any) => <div>{children}</div>,
  UserButton: (props: any) => <div aria-label="User menu">UserMenu</div>,
}));

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

// Mock ToggleTheme as a simple div
jest.mock("@/components/toggle-theme/ToggleTheme", () => () => (
  <div data-testid="toggle-theme" />
));

describe("NavButtons", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ resolvedTheme: "light" });
  });

  it("renders sign in button when user is not signed in", () => {
    (useAuth as jest.Mock).mockReturnValue({ isSignedIn: false });

    render(<NavButtons />);

    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(screen.queryByLabelText("User menu")).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-theme")).toBeInTheDocument();
  });

  it("renders navigation buttons and user menu when signed in", () => {
    (useAuth as jest.Mock).mockReturnValue({ isSignedIn: true });

    render(<NavButtons />);

    expect(
      screen.getByRole("navigation", { name: /main navigation/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /go to home page/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /go to bookmarks page/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("User menu")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-theme")).toBeInTheDocument();
  });

  it("uses dark theme for Clerk when resolvedTheme is dark", () => {
    (useAuth as jest.Mock).mockReturnValue({ isSignedIn: false });
    (useTheme as jest.Mock).mockReturnValue({ resolvedTheme: "dark" });

    render(<NavButtons />);

    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
