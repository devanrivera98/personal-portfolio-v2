"use client";
import { Providers } from "./Providers";
import { useEffect } from "react";
import { fonts } from "./fonts";
import "./globals.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.montserrat.variable} ${fonts.openSans.variable} ${fonts.dancingScript.variable} `}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
