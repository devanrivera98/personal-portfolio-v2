import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

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
          <button className="hover:text-darkRed">
            <ThemeSwitch />
          </button>
          <button onClick={() => setSliderStatus(!sliderStatus)}>
            <RxCross2 className="cross" size={32} />
          </button>
        </div>
        <ul
          className="flex flex-col gap-y-6 my-16"
          onClick={() => setSliderStatus(!sliderStatus)}
        >
          <li className="text-center">
            <a className="li-nav-tag">Work</a>
          </li>
          <li className="text-center">
            <a className="li-nav-tag">About</a>
          </li>
          <li className="text-center">
            <a className="li-nav-tag text-darkRed">Resume</a>
          </li>
        </ul>
        <div className="w-2/3 flex justify-between items-center">
          <button>
            <FaLinkedin className="hover:text-darkRed" size={30} />
          </button>
          <button>
            <FaGithub className="hover:text-darkRed" size={30} />
          </button>
          <button>
            <MdEmail className="hover:text-darkRed" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
