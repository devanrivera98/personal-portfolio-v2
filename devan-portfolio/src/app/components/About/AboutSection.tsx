import Image from 'next/image'
import './about.scss'

export default function AboutSection() {
  return (
    <>
      <section className="pt-16 md:pt-32">
        <div>
          <h1 className="text-2xl text-gray-500 about-title"> ABOUT ME</h1>
        </div>
        <div className='py-28 flex flex-col md:flex-row gap-x-10'>
          <div className='basis-1/3 grow pb-5 md:pb-0'>
            <Image src='/images/devan-emoji.png' alt='devan-photo' width={600} height={600} className="rounded-xl w-full" />
          </div>
          <div className='basis-2/3'>
            <h1 className='text-4xl pb-5'>Devan Rivera</h1>
            <div className='flex flex-col gap-y-5 text-lg'>
              <p>
                I'm Devan Rivera, a dedicated software engineer focused on creating innovative web solutions that prioritize user experience. My work spans across various projects, from engineering responsive landing pages to developing complex web applications, all aimed at solving real-world problems and driving engagement. With a strong proficiency in React, JavaScript, and modern CSS frameworks, I bring both creativity and technical expertise to every project.
              </p>
              <p>
                My approach to development is both methodical and creative, ensuring efficient problem-solving and high-quality outcomes. I continuously seek opportunities to learn and adapt, always staying current with the latest technologies. I thrive in collaborative environments and am eager to contribute to a team where I can leverage my skills to drive impactful results. Explore my portfolio to see examples of my work, and feel free to reach out to discuss potential collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
