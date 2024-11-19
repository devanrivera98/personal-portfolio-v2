'use client'

import { FaGithub } from "react-icons/fa"

export default function IntroGithub() {

  return (
    <>
      <button data-aos="fade" data-aos-delay="1100" onClick={() => window.open("https://github.com/devanrivera98", "_blank")}>
        <FaGithub className="hover:text-darkRed" size={30} />
      </button>
    </>
  )
}
