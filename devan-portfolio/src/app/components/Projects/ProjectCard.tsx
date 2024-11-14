import ProjectSkillsSection from "./ProjectSkillSection";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard() {
  return (
    <>
      <section className="py-28 grid lg:grid-cols-2 items-start lg:items-stretch">
        <div className="order-2 lg:order-1 flex flex-col pr-4">
          <h1 className="text-2xl">Advanced Building Services</h1>
          <p className="py-3">
            I developed a responsive, user-friendly website for Advanced Building Services, a leading HVAC company, to showcase their services and streamline client communication with EmailJS integration.
          </p>
          <ProjectSkillsSection />
          <div className="buttons-container">
            <button className="navigation-button bg-red-600 hover:bg-darkRed text-white">
              <span className="pr-2">
                <FaLink />
              </span>
              Live Demo
            </button>
            <button className="github-button">
              <span className="pr-2">
                <FaGithub />
              </span>
              GitHub
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 project-image-container">
          <picture>
            <img
              className="rounded-xl w-full object-fit"
              src="./images/advanced.png"
            ></img>
          </picture>
        </div>
      </section>
    </>
  );
}
