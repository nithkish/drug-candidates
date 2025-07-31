import React from "react";
import Link from "next/link";
import NavButtons from "@/components/nav-buttons/NavButtons";
import Image from "next/image";

/**
 * NavBar Section
 *
 * This component renders a sticky navigation bar that remains at the top of the page
 * while scrolling. It includes a logo that links to the home page and navigation buttons
 * for different sections of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @remarks
 * - The `backdrop-blur` and `backdrop-filter` classes are used to create a translucent background effect.
 * - The logo is displayed using the `next/image` component for optimized image rendering.
 * - The navigation bar is sticky and remains at the top of the page when scrolling
 */
function NavBar() {
  return (
    <nav className="sticky top-0 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 lg:p-5 p-2">
      <div className="max-w-7xl mx-auto lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="transform rotate-90"
                src={"/logo.png"}
                width={140}
                height={100}
                alt="logo"
                style={{ filter: "hue-rotate(22deg)" }}
              />
            </Link>
          </div>
          <NavButtons />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
