"use client";
import { HomeIcon, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleTheme from "@/components/toggle-theme/ToggleTheme";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

/**
 * @description A functional React component that renders a set of navigation buttons and a theme toggle button.
 * The navigation buttons are dynamically generated from a predefined array of button configurations.
 *
 * @returns {JSX.Element} A JSX element containing navigation buttons and a theme toggle button.
 *
 */
function NavButtons() {
  const { isSignedIn } = useAuth();
  const { resolvedTheme } = useTheme();

  // Define an array of navigation buttons with their properties
  // This array can be easily extended to add more buttons in the future
  // Each button has a name, icon, and href (link)
  // Can be moved to a central config file for scalability
  const navButtons = [
    {
      name: "Home",
      icon: <HomeIcon className="w-4 h-4" />,
      href: "/",
    },
    {
      name: "Bookmarks",
      icon: <Flag className="w-4 h-4" />,
      href: "/bookmarks",
    },
  ];

  const getButtonList = () =>
    navButtons.map((button) => (
      <Button
        variant={"outline"}
        key={button.name}
        className="flex items-center gap-2 bg-blue-600 text-gray-100 font-semibold hover:text-gray-50 hover:bg-blue-500 dark:bg-slate-900 dark:hover:bg-slate-800"
        asChild
      >
        <Link href={button.href}>
          {button.icon}
          <span className="hidden lg:inline">{button.name}</span>
        </Link>
      </Button>
    ));

  return (
    <div className="flex items-center space-x-4">
      {isSignedIn ? (
        <>
          {getButtonList()}
          <UserButton
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
            }}
          />
        </>
      ) : (
        <SignInButton
          mode="modal"
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        >
          <Button className=" bg-blue-600 text-gray-100 font-semibold hover:text-gray-50 hover:bg-blue-500 dark:bg-slate-900 dark:hover:bg-slate-800">
            Sign in
          </Button>
        </SignInButton>
      )}
      <ToggleTheme />
    </div>
  );
}
export default NavButtons;
