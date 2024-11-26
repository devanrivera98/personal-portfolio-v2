"use client";

import { IoVolumeHighSharp } from "react-icons/io5";
import useTextSpeech from "../hooks/useTextSpeech";

export default function SpeechButton() {
  return (
    <>
      <button
        data-aos="fade"
        data-aos-delay="400"
        className="hover:text-darkRed"
        onClick={useTextSpeech}
      >
        <IoVolumeHighSharp />
      </button>
    </>
  );
}
