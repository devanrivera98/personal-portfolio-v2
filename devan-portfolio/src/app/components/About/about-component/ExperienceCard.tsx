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
  const dutiesMap = duties.map((item, index) => (
    <li className="ex-fade-in" key={index}>
      {item}
    </li>
  ));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-6">
        <h2
          data-aos="fade-down"
          data-aos-delay="400"
          className="text-xl font-bold"
        >
          {title}
        </h2>
        <p data-aos="fade">{company}</p>
        <p data-aos="fade" className="text-sm">
          {date}
        </p>
        <div className={`${isOpen ? "hidden" : ""} flex`}>
          <p
            data-aos="fade"
            className="overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {firstDuty}
          </p>
          <SeeMoreButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col gap-y-2 list-disc list-inside">
              {dutiesMap}
            </ul>
            <SeeLessButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </>
  );
}
