"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * A React component that provides a button to toggle between light and dark themes.
 *
 * This component uses the `useTheme` hook from the `next-themes` library to manage
 * the current theme state. It switches the theme between "light" and "dark" when clicked.
 *
 * The button includes two icons:
 * - A Sun icon, displayed when the theme is light.
 * - A Moon icon, displayed when the theme is dark.
 *
 * Both icons are styled with Tailwind CSS classes to handle transitions and animations
 * when toggling between themes.
 *
 * Accessibility:
 * - The button includes an `aria-label` for screen readers to describe its purpose.
 * - A visually hidden `<span>` element provides additional accessible text for screen readers.
 *
 * @component
 * @returns {JSX.Element} The rendered toggle theme button.
 *
 */
export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Light/Dark mode button"
      title="Light/Dark Mode"
    >
      <SunIcon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        data-testid="sun-icon"
      />
      <MoonIcon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        data-testid="moon-icon"
      />
      {/* This span is visually hidden but provides an accessible label for screen readers */}
      {/* The "sr-only" class hides the text visually but keeps it accessible */}
      <span className="sr-only">Toggle Dark/Light theme</span>
    </Button>
  );
}
