import { HomeIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleTheme from "@/components/toggle-theme/ToggleTheme";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, UserButton } from "@clerk/nextjs";

/**
 * @description A functional React component that renders a set of navigation buttons and a theme toggle button.
 * The navigation buttons are dynamically generated from a predefined array of button configurations.
 *
 * @returns {JSX.Element} A JSX element containing navigation buttons and a theme toggle button.
 *
 */
async function NavButtons() {
  const user = await currentUser();

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
      name: "Favourites",
      icon: <Heart className="w-4 h-4" />,
      href: "/favourites",
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
      {user ? (
        <>
          {getButtonList()}
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
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
