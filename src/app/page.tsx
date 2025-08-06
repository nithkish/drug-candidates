import DrugsList from "@/sections/drugs-list/DrugsList";
import LandingPage from "@/sections/landing-page/LandingPage";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return user ? <DrugsList /> : <LandingPage />;
}
