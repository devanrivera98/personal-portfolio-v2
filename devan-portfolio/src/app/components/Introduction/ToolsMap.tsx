'use client'

import { mainToolsArray } from "./mainToolsArray";
import { useTheme } from "next-themes";

export default function ToolsMap() {
  const { theme } = useTheme();

  const mapTools = mainToolsArray.map(({ title, lightColor, darkColor }, index) => (
    <li className='li-tools py-1' key={index}>
      <span className={`p-1 ${theme === 'dark' ? `bg-${darkColor}` : `bg-${lightColor}`}`}>
        {title}
      </span>
    </li>
  ));

  return (
    <ul className='ul-list grid grid-cols-2 gap-y-1'>
      {mapTools}
    </ul>
  );
}
