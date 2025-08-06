import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-background">
      <Card className="w-full max-w-xl shadow-xl border-0">
        <CardHeader className="flex flex-col items-center bg-background rounded-t-xl">
          <Image
            src="/logo.png"
            alt="Drug Discovery Logo"
            width={200}
            height={200}
            className="rounded-xl transform rotate-90"
            style={{ filter: "hue-rotate(22deg)" }}
            priority
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Drug Discovery
          </h1>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col items-center gap-6 py-8">
          <p className="max-w-xl text-center text-lg text-muted-foreground">
            Welcome to the Drug Discovery platform. Explore, search, and
            bookmark potential drug candidates. Filter by status, view detailed
            information, and manage your personalized list of promising
            compounds. Empower your research with a modern, intuitive interface
            designed for scientists and innovators.
          </p>
          <p className="max-w-xl text-center text-lg text-muted-foreground">
            Sign In to get started.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
