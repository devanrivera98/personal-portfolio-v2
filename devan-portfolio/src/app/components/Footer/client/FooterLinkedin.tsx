"use client";
import { FaLinkedin } from "react-icons/fa";

export default function FooterLinkedin() {
  return (
    <button
      onClick={() =>
        window.open("https://www.linkedin.com/in/devanrivera/", "_blank")
      }
      aria-label="Vist Devan Rivera's linkedin account"
    >
      <FaLinkedin className="hover:text-darkRed" size={30} />
    </button>
  );
}
