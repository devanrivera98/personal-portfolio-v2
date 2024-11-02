'use client'

import { mainToolsArray } from "./mainToolsArray";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ToolsMap() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[])

  if (!mounted) return null;

  const mapTools = mainToolsArray.map(({title}, index) => (
    <li className='li-tools py-1' key={index}>
      <span
        className={`p-1 rounded text-white ${theme === 'dark' ? 'bg-darkRed' : 'bg-black'}`}>
        {title}
      </span>
    </li>
  ));

  return (
    <ul className='ul-list grid grid-cols-2 gap-y-1' >
      {mapTools}
    </ul>
  );
}
