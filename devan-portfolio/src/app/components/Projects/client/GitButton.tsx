"use client";

import { FaGithub } from "react-icons/fa";

export default function GitButton({ gitLink }: { gitLink: string | undefined }) {
  return (
    <button
      data-aos="fade"
      data-aos-delay="400"
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
