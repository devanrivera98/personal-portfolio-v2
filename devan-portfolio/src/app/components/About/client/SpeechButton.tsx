"use client";

import { IoVolumeHighSharp } from "react-icons/io5";
import useTextSpeech from "../hooks/useTextSpeech";

export default function SpeechButton() {
  return (
    <>
      <button className="hover:text-darkRed" onClick={useTextSpeech}>
        <IoVolumeHighSharp />
      </button>
    </>
  );
}
