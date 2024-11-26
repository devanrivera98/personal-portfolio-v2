import ExperienceCard from "./about-component/ExperienceCard";
import { experienceData } from "./data/ExperienceData";

export default function AllExperience() {
  const allExpMap = experienceData.map(
    ({ title, company, date, duties }, index) => (
      <ExperienceCard
        key={index}
        title={title}
        company={company}
        date={date}
        duties={duties}
        firstDuty={duties[0]}
      />
    ),
  );

  return <>{allExpMap}</>;
}
