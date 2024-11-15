import EvenProjectCard from "./EvenProjectCard";
import OddProjectCard from "./OddProjectCard";
import "./projectSection.scss";

export default function ProjectSection() {
  return (
    <>
      <section className="pt-16 md:pt-32">
        <h1 className="project-headline "> FEATURED PROJECTS</h1>
        <OddProjectCard
          title={"Advanced Building Services"}
          summary={
            "I developed a responsive, user-friendly website for Advanced Building Services, a leading HVAC company, to showcase their services and streamline client communication with EmailJS integration."
          }
          gitLink={
            "https://github.com/devanrivera98/advanced-building-services-personal"
          }
          demoLink={"https://absi-website.vercel.app/"}
          image={"./images/advanced.png"}
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
          title={"Book Palace"}
          summary={
            "Bookplace offers a seamless and immersive online bookstore experience, allowing users to effortlessly browse an extensive collection of books, fostering informed choices through a user-friendly review system. The platform also includes convenient features like a shopping cart and wishlist, enhancing the overall experience of discovering and acquiring favorite reads."
          }
          gitLink={"https://github.com/devanrivera98/book-palace"}
          demoLink={"https://book-palace.azurewebsites.net/"}
          image={"./images/advanced.png"}
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
      </section>
    </>
  );
}
