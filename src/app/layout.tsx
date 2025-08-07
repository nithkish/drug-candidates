import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavBar from "@/sections/nav-bar/NavBar";
import { GlobalContextProvider } from "@/providers/GlobalContextProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Drug Discovery",
  description: "App to discover drug candidates.",
};

/**
 * RootLayout
 *
 * The main layout component for the Drug Discovery application.
 * Sets up global providers, fonts, theming, authentication, and navigation.
 *
 * Accessibility:
 * - Sets the HTML language to English.
 * - Uses antialiased fonts for better readability.
 * - Wraps the app in providers for theme, authentication, and global state.
 * - Ensures navigation is present on all pages.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The page content to render inside the layout.
 *
 * @returns {JSX.Element} The root layout with global providers and navigation.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <div className="min-h-screen">
              <NavBar />
              <GlobalContextProvider>{children}</GlobalContextProvider>
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
