import './introduction.scss'
import Image from 'next/image'

export default function Introduction() {

  return (
    <>
      <section className='mt-20 grid lg:grid-cols-2'>
        <div className='flex flex-col gap-y-10'>
          <h1 className='text-5xl lg:text-7xl'>Hello, I'm Devan Rivera.</h1>
          <h2 className='text-4xl text-darkRed'>I Transform Pixels Into Ideas</h2>
          <div className=''>
            <p className='text-2xl'>
              I am a Los Angeles based Front End Developer skilled in building user-centric interfaces with React, showcasing diverse personal and freelance projects.
            </p>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-center'>
          <div className='portfolio-image-container'>
          <Image className='portfolio-image' src='/images/portfolio-photo.jpg' alt='devan-photo' width={2000} height={2600} layout="responsive" />
          </div>
        </div>
      </section>
    </>
  )
}
