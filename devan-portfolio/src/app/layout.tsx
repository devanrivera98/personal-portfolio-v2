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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NFC958D6');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body id="home">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFC958D6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
