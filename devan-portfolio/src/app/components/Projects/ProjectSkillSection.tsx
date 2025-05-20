export default function ProjectSkillsSection({
  projectSkills,
}: {
  projectSkills: string[];
}) {
  function delayTimer(index: number) {
    return (50 * index).toString();
  }

  const allSkills = projectSkills.map((skill, index) => (
      <div
        data-aos="flip-left"
        data-aos-delay={delayTimer(index)}
        key={index}
        className="pr-4 my-3"
      >
        <span className="skill-span">{skill}</span>
      </div>
  ));

  return (
    <>
      <div className="flex flex-wrap">{allSkills}</div>
    </>
  );
}
