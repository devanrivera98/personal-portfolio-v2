'use client'
import { FaLinkedin } from "react-icons/fa"

export default function SliderLinkedin() {
  return (
    <>
          <button onClick={() => window.open("https://www.linkedin.com/in/devanrivera/", "_blank")}>
            <FaLinkedin className="hover:text-darkRed" size={30} />
          </button>
    </>
  )
}
