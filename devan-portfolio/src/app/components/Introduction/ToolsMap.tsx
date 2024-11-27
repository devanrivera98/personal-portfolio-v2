"use client";

import { mainToolsArray } from "./mainToolsArray";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ToolsMap() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function addDelay(index: number) {
    return (400 + Number(index + "00")).toString();
  }

  const mapTools = mainToolsArray.map(({ title }, index) => (
    <li
      data-aos="flip-up"
      data-aos-delay={addDelay(index)}
      className="li-tools py-1"
      key={index}
    >
      <span
        className={`p-1 rounded text-white ${theme === "dark" ? "bg-darkRed" : "bg-black"}`}
      >
        {title}
      </span>
    </li>
  ));

  return <ul className="ul-list pr-2 md:pr-0 grid grid-cols-2 gap-y-1">{mapTools}</ul>;
}
