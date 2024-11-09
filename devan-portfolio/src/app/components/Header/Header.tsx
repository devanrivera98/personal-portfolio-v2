"use client";
import "./header.scss";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider from "./Slider";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [sliderStatus, setSliderStatus] = useState(false);

  return (
    <>
      <header data-aos="fade-down" data-aos-delay="100" className="container heading">
        <div className="flex justify-between py-4 items-center">
          <h1 className="hidden md:block text-4xl devan-title">Devan Rivera</h1>
          <h1 className=" md:hidden text-4xl devan-title">DR</h1>
          <button>
            <GiHamburgerMenu
              className="md:hidden"
              onClick={() => setSliderStatus(!sliderStatus)}
              size={32}
            />
          </button>
          <DesktopNav />
        </div>
        <Slider sliderStatus={sliderStatus} setSliderStatus={setSliderStatus} />
      </header>
    </>
  );
}
