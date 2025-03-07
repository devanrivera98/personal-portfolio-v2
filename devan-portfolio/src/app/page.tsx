import type { Metadata } from "next";
import AboutSection from "./components/About/AboutSection";
import FooterSection from "./components/Footer/FooterSection";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import NavigationButton from "./components/Projects/NavigationButton";
import ProjectSection from "./components/Projects/ProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";

export const metadata: Metadata = {
  title: "Devan's Portfolio",
  description: "Check out my latest projects! Portfolio created utilizing React.js and Next.js",
  openGraph: {
    title: "Devan's Portfolio",
    description: "Check out my latest projects! Portfolio created utilizing React.js and Next.js",
    url: "https://devanportfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://devanportfolio.vercel.app/images/devan-portfolio-home.png",
        width: 1200,
        height: 630,
        alt: "Devan's Portfolio",
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="container main-content relative">
        <Introduction />
        <NavigationButton />
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
        <FooterSection />
      </div>
    </>
  );
}
