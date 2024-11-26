import SkillCard from "./SkillCard";
import { allSkillsData } from "./data/allSkillsData";

export default function SkillsSection() {
  return (
    <>
      <section>
        <div>
          <h1 className="text-2xl font-bold">Skills</h1>
        </div>
        <div>
          <SkillCard category="Languages" skills={allSkillsData.languages} />
          <SkillCard
            category="Frameworks &amp; Database"
            skills={allSkillsData.frameworks}
          />
          <SkillCard category="Tools" skills={allSkillsData.tools} />
        </div>
      </section>
    </>
  );
}
