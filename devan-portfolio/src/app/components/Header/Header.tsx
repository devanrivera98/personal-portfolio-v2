'use client'
import './header.scss'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

export default function Header() {

  return (
    <>
      <header className='container'>
        <div className='flex justify-between py-4'>
          <h1 className="text-4xl">Devan Rivera</h1>
          <div className='flex flex-row gap-x-6 items-center'>
            <a className='nav-tag'>Projects</a>
            <a className='nav-tag'>About</a>
            <a className='nav-tag text-darkRed '>Resume</a>
            <button>
            <ThemeSwitch />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
