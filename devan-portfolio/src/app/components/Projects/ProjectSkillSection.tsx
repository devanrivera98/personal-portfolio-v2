export default function ProjectSkillsSection({
  projectSkills,
}: {
  projectSkills: string[];
}) {
  const allSkills = projectSkills.map((skill, index) => (
    <>
      <div key={index} className="pr-4 my-3">
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
