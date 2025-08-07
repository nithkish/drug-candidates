"use client";
import { HomeIcon, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleTheme from "@/components/toggle-theme/ToggleTheme";
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

/**
 * NavButtons Component
 *
 * Renders a set of accessible navigation buttons, a theme toggle, and authentication controls.
 *
 * Accessibility:
 * - Navigation buttons are grouped in a <nav> with aria-label for screen readers.
 * - Each navigation button uses an accessible label via aria-label.
 * - Icons are marked aria-hidden.
 * - The theme toggle and sign-in/user buttons are included in the navigation region.
 *
 * @returns {JSX.Element} Navigation controls for the application.
 */
function NavButtons() {
  const { isSignedIn } = useAuth();
  const { resolvedTheme } = useTheme();

  // Array of navigation buttons with their properties
  const navButtons = [
    {
      name: "Home",
      icon: (
        <HomeIcon className="w-4 h-4" aria-hidden="true" focusable="false" />
      ),
      href: "/",
      ariaLabel: "Go to Home page",
    },
    {
      name: "Bookmarks",
      icon: <Flag className="w-4 h-4" aria-hidden="true" focusable="false" />,
      href: "/bookmarks",
      ariaLabel: "Go to Bookmarks page",
    },
  ];

  const getButtonList = () =>
    navButtons.map((button) => (
      <Button
        variant={"outline"}
        key={button.name}
        className="flex items-center gap-2 bg-blue-600 text-gray-100 font-semibold hover:text-gray-50 hover:bg-blue-500 dark:bg-slate-900 dark:hover:bg-slate-800"
        asChild
        aria-label={button.ariaLabel}
      >
        <Link href={button.href}>
          {button.icon}
          <span className="hidden lg:inline">{button.name}</span>
        </Link>
      </Button>
    ));

  return (
    <nav
      className="flex items-center space-x-4"
      aria-label="Main navigation"
      role="navigation"
    >
      {isSignedIn ? (
        <>
          {getButtonList()}
          <UserButton
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
            }}
            aria-label="User menu"
          />
        </>
      ) : (
        <SignInButton
          mode="modal"
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        >
          <Button
            className="bg-blue-600 text-gray-100 font-semibold hover:text-gray-50 hover:bg-blue-500 dark:bg-slate-900 dark:hover:bg-slate-800"
            aria-label="Sign in"
          >
            Sign in
          </Button>
        </SignInButton>
      )}
      <ToggleTheme />
    </nav>
  );
}
export default NavButtons;
