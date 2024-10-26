import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function DesktopNav() {

  return (
    <>
      <ul className='ul-nav'>
        <li>
        <a className='li-nav-tag'>Work</a>
        </li>
        <li>
        <a className='li-nav-tag'>About</a>
        </li>
        <li>
        <a className='li-nav-tag text-darkRed'>Resume</a>
        </li>
        <li className='flex items-center'>
          <button>
          <ThemeSwitch />
          </button>
        </li>
      </ul>
    </>
  )
}
