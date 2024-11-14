const buildingServicesSkills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "CSS3",
  "HTML5",
  "EmailJS",
  "Vite",
];

export default function ProjectSkillsSection() {
  const allSkills = buildingServicesSkills.map((skill) => (
    <>
      <div className="pr-4 my-3">
        <span className="skill-span">{skill}</span>
      </div>
    </>
  ));

  return (
    <>
      <div className="flex flex-wrap">{allSkills}</div>
    </>
  );
}
