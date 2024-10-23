'use client'

import { Providers } from "./Providers";
import { fonts } from "./fonts";
import "./globals.scss";
import { ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import {theme} from './theme'

//  - ColorModeScript: Injects the correct color mode (light/dark) based on the user's preference or system settings. This ensures the correct color mode is applied on the initial load, avoiding a flash of incorrect mode.
//  - If ColorModeScript is placed in the body, the server renders the page without the color mode logic applied initially. This can lead to a situation where the page renders the wrong color mode at first, and then after hydration the correct mode is applied leading to className did not match error.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Head>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
      </Head> */}
      <body
        className={`${fonts.montserrat.variable} ${fonts.openSans.variable}`}
      >
        <Providers>
          {/* <ColorModeScript initialColorMode={theme.initialColorMode} /> */}
          {children}
          </Providers>
        {/* {children} */}
      </body>
    </html>
  );
}
