"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider
 *
 * Wraps the application with the next-themes ThemeProvider to enable theme switching (light/dark/system).
 *
 * Props:
 * - children: React.ReactNode — The content to render within the theme provider.
 * - ...props: All additional props are forwarded to next-themes ThemeProvider.
 *
 * @example
 * <ThemeProvider attribute="class" defaultTheme="system">
 *   <App />
 * </ThemeProvider>
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
