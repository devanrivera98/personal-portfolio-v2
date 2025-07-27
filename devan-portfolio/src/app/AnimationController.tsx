"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AnimationController() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return null;
}
