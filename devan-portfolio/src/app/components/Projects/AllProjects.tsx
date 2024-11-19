import OddProjectCard from "./OddProjectCard";
import EvenProjectCard from "./EvenProjectCard";

export default function AllProjects() {
  return (
    <>
      <OddProjectCard
        title={"Advanced Building Services"}
        summary={
          "I developed a responsive, user-friendly website for Advanced Building Services, a leading HVAC company, to showcase their services and streamline client communication with EmailJS integration."
        }
        gitLink={
          "https://github.com/devanrivera98/advanced-building-services-personal"
        }
        demoLink={"https://absi-website.vercel.app/"}
        image={"/images/advanced-services.png"}
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
          "Portfolio V2 was created with the intent to showcase my frontend development growth from my previous portfolio."
        }
        gitLink={"https://github.com/devanrivera98/personal-portfolio-v2"}
        demoLink={"https://book-palace.azurewebsites.net/"}
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
        image={"/images/devan-portfolio-two.png"}
      />
      <OddProjectCard
        title={"Anytime Promotion"}
        summary={
          "Anytime Promotion was designed and customized for a small business, empowering users to seamlessly access the business's database that I integrated. Through intuitive features, visitors can effortlessly connect with the business, while also gaining insights into the owner's persona for a more personal, engaging, efficient, and user-friendly experience."
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
        image={"/images/anytime-promotion.png"}
      />
      <EvenProjectCard
        title={"Book Palace"}
        summary={
          "Bookplace offers a seamless and immersive online bookstore experience, allowing users to effortlessly browse an extensive collection of books, fostering informed choices through a user-friendly review system. The platform also includes convenient features like a shopping cart and wishlist, enhancing the overall experience of discovering and acquiring favorite reads."
        }
        gitLink={"https://github.com/devanrivera98/book-palace"}
        demoLink={"https://book-palace.azurewebsites.net/"}
        image={"/images/book-palace.png"}
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
          "Intended to professionally display my collection of projects and skills. Need to fix"
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
        image={"/images/devan-portfolio-one.png"}
      />
      <EvenProjectCard
        title={"WatchList"}
        summary={
          "WatchList is a dynamic front-end application showcasing my adept use of CSS classes, seamlessly integrating JavaScript and local storage for a user-friendly experience in exploring a curated movie catalog. Users can effortlessly search, discover details, and add movies to their personalized list, enhancing navigation for a dynamic and engaging exploration."
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
      />
    </>
  );
}
