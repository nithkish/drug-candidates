import { render, screen, fireEvent } from "@testing-library/react";
import ToggleTheme from "@/components/toggle-theme/ToggleTheme";
import { useTheme } from "next-themes";

// Mock the useTheme hook from next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ToggleTheme Component", () => {
  it("renders the component correctly", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });

    render(<ToggleTheme />);

    // Check if the button is rendered
    const button = screen.getByRole("button", {
      name: /Light\/Dark mode button/i,
    });
    expect(button).toBeInTheDocument();

    // Check if the SunIcon is visible in light mode
    const sunIcon = screen.getByTestId("sun-icon");
    expect(sunIcon).toBeInTheDocument();
    expect(sunIcon).toHaveClass("rotate-0 scale-100");
  });

  it("toggles the theme when clicked", () => {
    const setThemeMock = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ToggleTheme />);

    const button = screen.getByRole("button", {
      name: /Light\/Dark mode button/i,
    });

    // Simulate a click to toggle the theme
    fireEvent.click(button);

    // Verify that setTheme was called with "dark"
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("displays the MoonIcon in dark mode", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: jest.fn(),
    });

    render(<ToggleTheme />);

    // Check if the MoonIcon is visible in dark mode
    const moonIcon = screen.getByTestId("moon-icon");
    expect(moonIcon).toBeInTheDocument();
  });
});
