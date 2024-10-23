'use client';

// Importing ThemeProvider from next-themes
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Declaring ThemeProvider as 'any' to bypass TypeScript type checks.
// This is necessary due to a TypeScript issue where `next-themes' does not provide accurate type definitions, resulting in errors when using the ThemeProvider as a JSX component. Consider revisiting this once `next-themes` has proper types defined.
const ThemeProvider: any = NextThemesProvider;

// Providers component to wrap children with ThemeProvider
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
