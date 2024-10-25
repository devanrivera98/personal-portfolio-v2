import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function SliderOpen({sliderStatus, setSliderStatus} : {sliderStatus: boolean, setSliderStatus: (status: boolean) => void }) {

  return (
    <>
    <div className="tinted-overlay"></div>
    <div className="p-4 nav-slider-open">
      <div className="w-full flex justify-between items-center">
          <button>
            <ThemeSwitch />
          </button>
          <button onClick={() => setSliderStatus(!sliderStatus)}>
            <RxCross2 size={32} />
          </button>
      </div>
      <ul className="flex flex-col gap-y-6 my-16" onClick={() => setSliderStatus(!sliderStatus)}>
        <li className="text-center">
        <a className='li-tag'>Work</a>
        </li>
        <li className="text-center">
        <a className='li-tag text-center'>About</a>
        </li>
        <li className="text-center">
        <a className='li-tag text-darkRed'>Resume</a>
        </li>
      </ul>
      <div className="w-2/3 flex justify-between items-center">
        <button>
          <FaLinkedin size={30} />
        </button>
        <button>
          <FaGithub size={30} />
        </button>
        <button>
          <MdEmail size={30} />
        </button>
      </div>
    </div>
    </>
  )
}
