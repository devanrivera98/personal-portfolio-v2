import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function ThemeButton() {

    const [currentTheme, setCurrentTheme] = useState("light mode button");

  const getCurrentTheme = (value : string) => {
    setCurrentTheme(value)
  }

  return (
    <>
              <button aria-label={currentTheme} className="hover:text-darkRed">
            <ThemeSwitch onSendData={getCurrentTheme} />
          </button>
    </>
  )
}
