import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function SliderOpen({sliderStatus, setSliderStatus} : {sliderStatus: boolean, setSliderStatus: (status: boolean) => void }) {

  return (
    <>
    <div className="fixed">
      <div className="flex justify-between">
          <button>
          <ThemeSwitch />
          </button>
          <RxCross2 />
      </div>
      <ul className={sliderStatus ? 'ul-slider-open' : 'ul-nav'}  onClick={() => setSliderStatus(!sliderStatus)}>
        <li>
        <a className='li-tag'>Projects</a>
        </li>
        <li>
        <a className='li-tag'>About</a>
        </li>
        <li>
        <a className='li-tag text-darkRed'>Resume</a>
        </li>
      </ul>
    </div>
    </>
  )
}
