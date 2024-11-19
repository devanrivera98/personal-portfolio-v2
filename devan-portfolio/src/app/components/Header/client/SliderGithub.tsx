'use client'
import { FaGithub } from "react-icons/fa"

export default function SliderGithub() {
  return (
    <>
          <button onClick={() => window.open("https://github.com/devanrivera98", "_blank")}>
            <FaGithub className="hover:text-darkRed" size={30} />
          </button>
    </>
  )
}
