import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const fonts = {
  montserrat,
  openSans,
  dancingScript,
};
