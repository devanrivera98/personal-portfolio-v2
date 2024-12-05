import ThemeButton from "../ThemeSwitch/ThemeButton";

export default function DesktopNav() {
  return (
    <>
      <ul className="ul-nav">
        <li>
          <a href="#projects" className="li-nav-tag">
            Work
          </a>
        </li>
        <li>
          <a className="li-nav-tag" href="#about">
            About
          </a>
        </li>
        <li>
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
        <li className="flex items-center">
          <ThemeButton />
        </li>
      </ul>
    </>
  );
}
