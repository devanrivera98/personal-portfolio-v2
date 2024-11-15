"use client";

import { FaLink } from "react-icons/fa6";

export default function DemoButton({ demoLink }: { demoLink: string }) {
  return (
    <button
      className="navigation-button bg-red-600 hover:bg-darkRed text-white"
      onClick={() => window.open(demoLink, "_blank")}
    >
      <span className="pr-2">
        <FaLink />
      </span>
      Live Demo
    </button>
  );
}
