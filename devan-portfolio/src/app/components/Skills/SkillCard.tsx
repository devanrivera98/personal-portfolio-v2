export default function SkillCard({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  const allCatSkills = skills.map((skill, index) => (
    <div className="dark:bg-darkGray bg-gray-200 p-1 rounded transition-colors delay-75 dark:hover:bg-darkRed hover:bg-darkRed hover:text-white">
      <span className="whitespace-nowrap">{skill}</span>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col py-3">
        <div className="flex pb-2">
          <h2 className="font-semibold">{category}</h2>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-4">{allCatSkills}</div>
      </div>
    </>
  );
}
