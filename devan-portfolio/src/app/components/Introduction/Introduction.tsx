import './introduction.scss'
import Image from 'next/image'
import ToolsMap from './ToolsMap'

export default function Introduction() {

  return (
    <>
      <section className='mt-14 flex flex-col lg:flex-row'>
        <div className='intro-text-container flex flex-col gap-y-10'>
          <h1 className='text-5xl lg:text-7xl'>Hello, <br className='hidden lg:block'></br> I'm Devan Rivera.</h1>
          <h2 className='text-4xl text-darkRed'>I Transform Pixels Into Ideas</h2>
          <div className=''>
            <p className='text-2xl'>
              I am a Los Angeles based Front End Developer skilled in building user-centric interfaces with <span className='text-darkRed'>React</span>, showcasing diverse personal and freelance projects.
            </p>
            <div>
              <h1 className=' text-2xl py-4'>Technical Proficiencies:</h1>
            <div>
            <ToolsMap />
            </div>
            </div>
          </div>
        </div>
        <div className='hidden intro-img-container lg:flex items-center justify-center'>
          <div className='portfolio-image-container'>
          <Image className='portfolio-image' src='/images/portfolio-photo.jpg' alt='devan-photo' width={1000} height={1300} priority/>
          </div>
        </div>
      </section>
    </>
  )
}
