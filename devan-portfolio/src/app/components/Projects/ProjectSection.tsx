import AllProjects from "./AllProjects";
import "./projectSection.scss";

export default function ProjectSection() {
  return (
    <>
      <section id="projects" className="pt-16 md:pt-32">
        <h1 className="project-headline"> FEATURED PROJECTS</h1>
        <AllProjects />
      </section>
    </>
  );
}
