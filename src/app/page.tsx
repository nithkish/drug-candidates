import DrugsList from "@/sections/drugs-list/DrugsList";
import LandingPage from "@/sections/landing-page/LandingPage";
import { currentUser } from "@clerk/nextjs/server";

/**
 * Home Page
 *
 * The main entry point for the Drug Discovery application.
 * Displays the DrugsList for authenticated users and the LandingPage for unauthenticated users.
 *
 * Accessibility:
 * - Renders accessible components for both authenticated and unauthenticated states.
 *
 * @returns {JSX.Element} The home page content based on authentication state.
 */
export default async function Home() {
  const user = await currentUser();
  return user ? <DrugsList /> : <LandingPage />;
}
