"use client";

import { FaGithub } from "react-icons/fa";

export default function GitButton({ gitLink }: { gitLink: string }) {
  return (
    <button
      className="github-button"
      onClick={() => window.open(gitLink, "_blank")}
    >
      <span className="pr-2">
        <FaGithub />
      </span>
      GitHub
    </button>
  );
}
