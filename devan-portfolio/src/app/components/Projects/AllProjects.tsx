import OddProjectCard from "./OddProjectCard";
import EvenProjectCard from "./EvenProjectCard";

export default function AllProjects() {
  return (
    <>
    <EvenProjectCard
        title={"PsychSearch"}
        summary={
          "PsychSearch is a full-stack research platform that helps academic researchers quickly find open-access articles that aren't behind paywalls. Users enter research queries, which are summarized with AI-generated descriptions to clarify and refine the search, and the platform allows users to save relevant articles into a personalized library with folders and notes. Designed for a fast, seamless research workflow, PsychSearch incorporates AI tools during early wireframing to explore layouts and improve the user experience."
        }
        gitLink={"https://github.com/devanrivera98/mindsoother"}
        demoLink={"https://psychsearch.onrender.com/"}
        image={"/images/projects/psychsearch.png"}
        projectSkills={[
          "React",
          "Typescript",
          "Next.js",
          "Supabase",
          "PostgreSQL",
          "ChatGPT API",
          "Zod",
          "TailwindCSS"
        ]}
      />
      <OddProjectCard
        title={"Quantiiv"}
        summary={
          "Quantiiv is a sleek marketing site for a startup using AI to deliver restaurant analytics. The site features an accessible autoplay hero video, smooth animations, and a responsive, user-focused layout. Built with Next.js, React, TailwindCSS, and TypeScript, it helps Quantiiv showcase their product and brand to investors and clients."
        }
        demoLink={"https://www.quantiiv.com/"}
        image={"/images/projects/quantiiv.png"}
        projectSkills={[
          "React",
          "Typescript",
          "TailwindCSS",
          "Next.js",
          "Wordpress CMS",
          "Figma",
        ]}
      />
      <EvenProjectCard
        title={"Great Harvest Bakery"}
        summary={
          "An accessible, conversion-focused website created for Great Harvest Bakery to spark interest from prospective franchisees. The site follows modern accessibility standards and leverages HubSpot forms to simplify business inquiries and franchise applications."
        }
        gitLink={"https://github.com/kepsteen/great-harvest-landing-page"}
        demoLink={"https://franchising.greatharvest.com/"}
        image={"/images/projects/great-harvest.png"}
        projectSkills={[
          "React",
          "Typescript",
          "TailwindCSS",
          "Next.js",
          "Hubspot Forms",
          "Figma",
        ]}
      />
      <OddProjectCard
        title={"Advanced Building Services"}
        summary={
          "A responsive, user-friendly website developed for Advanced Building Services, a leading HVAC company, in collaboration with a UX/UI designer. The site showcases their services and streamlines client communication through EmailJS integration, enabling seamless inquiries and service requests."
        }
        gitLink={
          "https://github.com/devanrivera98/advanced-building-services-personal"
        }
        demoLink={"https://absi-website.vercel.app/"}
        image={"/images/projects/advanced-building.png"}
        projectSkills={[
          "React",
          "TypeScript",
          "Tailwind CSS",
          "CSS3",
          "HTML5",
          "EmailJS",
          "Vite",
        ]}
      />
      <EvenProjectCard
        title={"Devan's Portfolio V2"}
        summary={
          "Portfolio V2 was created to refine and elevate my original portfolio, focusing on performance and user experience. Key features include a dark mode toggle for personalized viewing and smooth transitions for a more interactive, seamless user experience."
        }
        gitLink={"https://github.com/devanrivera98/personal-portfolio-v2"}
        demoLink={"https://devanportfolio.vercel.app/"}
        projectSkills={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "SCSS",
          "HTML5",
          "Vercel",
          "AOS",
        ]}
        image={"/images/projects/devan-portfolio-v2.png"}
      />
      <OddProjectCard
        title={"Anytime Promotion"}
        summary={
          "Anytime Promotion was designed and customized for a small business, allowing users to seamlessly access the integrated database. With intuitive features, visitors can easily connect with the business and learn about the owner, creating a personal and engaging experience."
        }
        gitLink={"https://github.com/devanrivera98/anytime-promotion"}
        demoLink={"https://anytime-promotion.netlify.app/"}
        projectSkills={[
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Caspio",
          "Netlify",
          "CSS3",
          "HTML5",
          "Vite",
        ]}
        image={"/images/projects/anytime-promotion.png"}
      />
      <EvenProjectCard
        title={"Book Palace"}
        summary={
          "Bookplace provides a seamless online bookstore experience, allowing users to easily browse a wide collection of books and make informed choices through a critic's review system. Features like a shopping cart and wishlist enhance the experience of discovering and purchasing favorite reads."
        }
        gitLink={"https://github.com/devanrivera98/book-palace"}
        demoLink={"https://bookpalaceusa.com/"}
        image={"/images/projects/book-palace.png"}
        projectSkills={[
          "React",
          "JavaScript",
          "Bootstrap",
          "Express.js",
          "PostgreSQL",
          "CSS3",
          "HTML5",
        ]}
      />
      <OddProjectCard
        title={"Devan's Portfolio V1"}
        summary={
          "My original portfolio showcases my skills and projects using React, featuring a clean and responsive design. Sections dedicated to about, projects, and skills allow for easy navigation and a clear presentation of my work."
        }
        gitLink={"https://github.com/devanrivera98/Personal-Portfolio"}
        demoLink={"https://devanrivera.netlify.app/"}
        projectSkills={[
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Netlify",
          "CSS3",
          "HTML5",
          "Vite",
        ]}
        image={"/images/projects/devan-portfolio-og.png"}
      />
      {/* <EvenProjectCard
        title={"WatchList"}
        summary={
          "WatchList is a dynamic front-end app that leverages CSS, JavaScript, and local storage to create an interactive movie catalog. Users can search, explore, and add movies to a personalized list for an engaging experience."
        }
        gitLink={"https://github.com/devanrivera98/WatchList"}
        demoLink={"https://devanrivera98.github.io/WatchList/"}
        projectSkills={[
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Netlify",
          "CSS3",
          "HTML5",
          "Vite",
        ]}
        image={"/images/watchlist.png"}
      /> */}
    </>
  );
}
