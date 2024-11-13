import ProjectCard from "./ProjectCard";
import "./projectSection.scss";

export default function ProjectSection() {
  return (
    <>
      <section className="pt-16 md:pt-32">
        <h1 className="project-headline"> FEATURED PROJECTS</h1>
        <ProjectCard />
      </section>
    </>
  );
}
