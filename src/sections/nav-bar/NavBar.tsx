import React from "react";
import Link from "next/link";
import NavButtons from "@/components/nav-buttons/NavButtons";
import Image from "next/image";

/**
 * NavBar Section
 *
 * Renders a sticky, accessible navigation bar at the top of the page.
 * Includes a logo linking to the home page and navigation buttons for different sections.
 *
 * Accessibility:
 * - Uses <nav> with role="navigation" and aria-label for screen readers.
 * - The logo uses descriptive alt text and is focusable as a home link.
 * - Navigation buttons are grouped and keyboard accessible.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @remarks
 * - The `backdrop-blur` and `backdrop-filter` classes create a translucent background effect.
 * - The navigation bar is sticky and remains at the top of the page when scrolling.
 */
function NavBar() {
  return (
    <nav
      className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 lg:p-5 p-2"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" aria-label="Go to home page">
              <Image
                className="transform rotate-90"
                src={"/logo.png"}
                width={140}
                height={100}
                alt="Drug Discovery platform logo"
                style={{ filter: "hue-rotate(22deg)" }}
                priority
              />
            </Link>
          </div>
          <div aria-label="Primary navigation" role="group">
            <NavButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
