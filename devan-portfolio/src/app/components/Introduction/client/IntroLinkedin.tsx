"use client";
import { FaLinkedin } from "react-icons/fa";

export default function IntroLinkedin() {
  return (
    <button
      data-aos="fade"
      data-aos-delay="1000"
      onClick={() =>
        window.open("https://www.linkedin.com/in/devanrivera/", "_blank")
      }
      aria-label="Vist Devan Rivera's linkedin account"
    >
      <FaLinkedin className="hover:text-darkRed" size={30} />
    </button>
  );
}
