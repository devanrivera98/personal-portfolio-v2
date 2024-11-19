"use client";
import { MdEmail } from "react-icons/md";

export default function IntroEmail() {
  return (
    <>
      <button
        data-aos="fade"
        data-aos-delay="1200"
        onClick={() =>
          (window.location.href = "mailto:devanrivera98@gmail.com")
        }
        aria-label="Send an email to devanrivera98@gmail.com"
      >
        <MdEmail className="hover:text-darkRed" size={30} />
      </button>
    </>
  );
}
