import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function SliderClosed({sliderStatus, setSliderStatus} : {sliderStatus: boolean; setSliderStatus: (status: boolean) => void} ) {

  return (
    <>
      <ul className='ul-nav'>
        <li>
        <a className='li-tag'>Work</a>
        </li>
        <li>
        <a className='li-tag'>About</a>
        </li>
        <li>
        <a className='li-tag text-darkRed'>Resume</a>
        </li>
        <li>
          <button>
          <ThemeSwitch />
          </button>
        </li>
      </ul>
    </>
  )
}
