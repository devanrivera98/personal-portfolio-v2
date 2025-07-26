import ProjectSkillsSection from "./ProjectSkillSection";
import { IProjectCard } from "./interfaces/iProjectCard";
import GitButton from "./client/GitButton";
import DemoButton from "./client/DemoButton";
import Image from "next/image";

export default function OddProjectCard({
  title,
  image,
  gitLink,
  summary,
  demoLink,
  projectSkills,
}: IProjectCard) {
  return (
    <>
      <div className="py-28 grid lg:grid-cols-2 items-start lg:items-stretch gap-x-5">
        <div className="order-2 lg:order-1 flex flex-col lg:pr-4">
          <h1 data-aos="fade-down" className="text-2xl">
            {title}
          </h1>
          <p data-aos="fade-down" data-aos-delay="200" className="py-3">
            {summary}
          </p>
          <ProjectSkillsSection projectSkills={projectSkills} />
          <div className="buttons-container">
            <DemoButton demoLink={demoLink} />
            {gitLink !== undefined ? <GitButton gitLink={gitLink} /> : " "}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="order-1 lg:order-2 pb-5 lg:pb-0 project-image-container"
        >
          <Image
            className="rounded-xl w-full"
            src={image}
            width="2600"
            height="1400"
            alt={title}
          />
        </div>
      </div>
    </>
  );
}
