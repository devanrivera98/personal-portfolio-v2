import ProjectSkillsSection from "./ProjectSkillSection";
import { IProjectCard } from "./interfaces/iProjectCard";
import DemoButton from "./client/DemoButton";
import GitButton from "./client/GitButton";

export default function EvenProjectCard({
  title,
  image,
  gitLink,
  summary,
  demoLink,
  projectSkills,
}: IProjectCard) {
  return (
    <>
      <section className="py-28 grid lg:grid-cols-2 items-start lg:items-stretch gap-x-5">
        <div className="order-2 flex flex-col lg:pl-4">
          <h1 className="text-2xl">{title}</h1>
          <p className="py-3">{summary}</p>
          <ProjectSkillsSection projectSkills={projectSkills} />
          <div className="buttons-container">
            <DemoButton demoLink={demoLink} />
            <GitButton gitLink={gitLink} />
          </div>
        </div>
        <div className="order-1 pb-5 lg:pb-0 project-image-container">
          <picture>
            <img className="rounded-xl w-full" src={image}></img>
          </picture>
        </div>
      </section>
    </>
  );
}
