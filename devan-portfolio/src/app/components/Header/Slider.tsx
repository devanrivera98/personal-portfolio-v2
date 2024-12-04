import { RxCross2 } from "react-icons/rx";
import SliderLinkedin from "./client/SliderLinkedin";
import SliderGithub from "./client/SliderGithub";
import SliderEmail from "./client/SliderEmail";
import ThemeButton from "../ThemeSwitch/ThemeButton";

export default function Slider({
  sliderStatus,
  setSliderStatus,
}: {
  sliderStatus: boolean;
  setSliderStatus: (status: boolean) => void;
}) {
  return (
    <div>
      {sliderStatus && (
        <div
          className="tinted-overlay"
          onClick={() => setSliderStatus(false)}
        ></div>
      )}
      <div className={sliderStatus ? "nav-slider-open" : "nav-slider-closed"}>
        <div className="w-full flex justify-between items-center">
          <ThemeButton />
          <button aria-label="Close slider button" onClick={() => setSliderStatus(!sliderStatus)}>
            <RxCross2 className="cross" size={32} />
          </button>
        </div>
        <ul
          className="flex flex-col gap-y-6 my-16"
          onClick={() => setSliderStatus(!sliderStatus)}
        >
          <li className="text-center">
            <a href="#projects" className="li-nav-tag">
              Work
            </a>
          </li>
          <li className="text-center">
            <a href="#about" className="li-nav-tag">
              About
            </a>
          </li>
          <li className="text-center">
            <a
              className="li-nav-tag text-darkRed"
              href="/images/devan-rivera-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Devan Rivera's resume"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="w-2/3 flex justify-between items-center">
          <SliderLinkedin />
          <SliderGithub />
          <SliderEmail />
        </div>
      </div>
    </div>
  );
}
