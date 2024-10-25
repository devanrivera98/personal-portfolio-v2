'use client'
import './header.scss'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import SliderClosed from './SliderClosed';
import SliderOpen from './SliderOpen';

export default function Header() {

  const [sliderStatus, setSliderStatus] = useState(true);

  return (
    <>
      <header className='container'>
        <div className='flex justify-between py-4 items-center'>
          <h1 className="hidden md:block text-4xl devan-title">Devan Rivera</h1>
          <h1 className=" md:hidden text-4xl devan-title">DR</h1>
          <button>
          <GiHamburgerMenu className='md:hidden' onClick={() => setSliderStatus(!sliderStatus)} size={32} />
          </button>
          {sliderStatus ? <SliderOpen sliderStatus={sliderStatus} setSliderStatus={setSliderStatus} /> : <SliderClosed sliderStatus={sliderStatus} setSliderStatus={setSliderStatus} />}
          {/* <ul className={sliderStatus ? 'ul-slider-open' : 'ul-nav'}  onClick={() => setSliderStatus(!sliderStatus)}>
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
          </ul> */}
        </div>
      </header>
    </>
  )
}
