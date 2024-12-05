"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch({
  onSendData,
}: {
  onSendData: (item: string) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeClick = (color: string, altText: string) => {
    setTheme(color);
    onSendData(altText);
  };

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={24}
        height={24}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="hover:text-red-700"
        size={24}
        onClick={() => handleThemeClick("light", "Activate dark mode")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="hover:text-red-700"
        size={24}
        onClick={() => handleThemeClick("dark", "Activate light mode")}
      />
    );
  }

  return null;
}
