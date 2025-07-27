import { Providers } from "./Providers";
import { fonts } from "./fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.scss";
import AnimationController from "./AnimationController";

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
      <GoogleTagManager gtmId="NFC958D6" />
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
        <AnimationController />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
