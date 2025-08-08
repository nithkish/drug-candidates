"use client";
import ListSkeleton from "@/components/list-skeleton/ListSkeleton";
import DrugsList from "@/sections/drugs-list/DrugsList";
import LandingPage from "@/sections/landing-page/LandingPage";
import { useAuth } from "@clerk/nextjs";

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
export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <ListSkeleton />; // Wait for auth state to load
  return isSignedIn ? <DrugsList /> : <LandingPage />;
}
