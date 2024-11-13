import ProjectSkillsSection from "./ProjectSkillSection";

export default function ProjectCard() {
  return (
    <>
    <section className="py-28 grid lg:grid-cols-2">
      <div className="flex flex-col pr-4">
        <h1 className="text-2xl">Advanced Building Services</h1>
        <p className="py-3">Advanced Building Services, is a leading HVAC company for which I developed an informative, user-friendly webpage. The site effectively showcases the company's services and integrates EmailJS to facilitate seamless communication between the business and its clients. I prioritized optimizing the user experience across all devices, ensuring that the website is fully responsive and intuitive on both mobile and desktop platforms.</p>
        <ProjectSkillsSection />
        <div className="mt-auto pr-2 flex justify-end gap-7">
          <button className="py-2 px-4 bg-darkRed rounded">Live Demo</button>
          <button className="py-2 px-4 bg-mediumGray rounded">GitHub</button>
        </div>
      </div>
      <div>
        <picture>
          <img className="rounded-xl w-full h-full " src="./images/advanced.png"></img>
        </picture>
      </div>
    </section>
    </>
  )
}
