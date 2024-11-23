"use client";

import { useState } from "react";
import SeeMoreButton from "../client/SeeMoreButton";
import SeeLessButton from "../client/SeeLessButton";

export default function ExperienceCard({
  title,
  company,
  date,
  firstDuty,
  duties,
}: {
  title: string;
  company: string;
  firstDuty: string;
  date: string;
  duties: string[];
}) {
  const dutiesMap = duties.map((item, index) => <li key={index}>{item}</li>);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{company}</p>
        <p className="text-sm">{date}</p>
        <div className={`${isOpen ? "hidden" : ""} flex`}>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {firstDuty}
          </p>
          <SeeMoreButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className={`${isOpen ? "" : "hidden"}`}>
          <ul
            className={`${isOpen ? "" : "hidden"} flex flex-col gap-y-2 list-disc list-inside`}
          >
            {dutiesMap}
          </ul>
          <SeeLessButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
}
