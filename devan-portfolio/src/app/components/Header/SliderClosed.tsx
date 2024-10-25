import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function SliderClosed({sliderStatus, setSliderStatus} : {sliderStatus: boolean; setSliderStatus: (status: boolean) => void} ) {

  return (
    <>
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
        <li className={sliderStatus ? 'hidden' : ''}>
          <button>
          <ThemeSwitch />
          </button>
        </li>
      </ul>
    </>
  )
}
