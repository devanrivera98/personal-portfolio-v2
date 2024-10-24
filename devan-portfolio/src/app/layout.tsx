'use client'
import { Providers } from "./Providers";
import { fonts } from "./fonts";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fonts.montserrat.variable} ${fonts.openSans.variable} ${fonts.dancingScript.variable} `}>
      <body>
        <Providers>
          {children}
         </Providers>
      </body>
    </html>
  );
}
