'use client'
import './header.scss'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function Header() {

  return (
    <>
      <header className='container'>
        <div className='flex justify-between py-4'>
          <h1 className="hidden md:block text-4xl devan-title">Devan Rivera</h1>
          <h1 className=" md:hidden text-4xl devan-title">DR</h1>
          <ul className='ul-nav'>
            <li>
            <a className='li-tag'>Projects</a>
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
        </div>
      </header>
    </>
  )
}
