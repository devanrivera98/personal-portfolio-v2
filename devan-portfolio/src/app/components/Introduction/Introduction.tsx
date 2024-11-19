import "./introduction.scss";
import Image from "next/image";
import ToolsMap from "./ToolsMap";
import IntroLinkedin from "./client/IntroLinkedin";
import IntroGithub from "./client/IntroGithub";
import IntroEmail from "./client/IntroEmail";
import IntroResume from "./client/IntroResume";

export default function Introduction() {
  return (
    <>
      <section className="mt-14 flex flex-col lg:flex-row pb-16 md:pb-32">
        <div className="intro-text-container flex flex-col gap-y-10">
          <h1
            data-aos="fade-down"
            data-aos-data="400"
            className="text-5xl lg:text-6xl font-semibold"
          >
            Hello, I&apos;m <br className="hidden lg:block"></br> Devan Rivera.
          </h1>
          <h2
            data-aos="fade-down"
            data-aos-delay="400"
            className="text-4xl text-darkRed font-semibold"
          >
            I Transform Pixels Into Ideas
          </h2>
          <div data-aos="fade-up" data-aos-delay="500">
            <p className="text-xl">
              I am a Los Angeles based Front End Developer skilled in building
              user-centric interfaces with{" "}
              <span className="text-darkRed">React</span>, showcasing diverse
              personal and freelance projects.
            </p>
            <div>
              <h1 className="text-2xl py-4">Technical Proficiencies:</h1>
              <div>
                <ToolsMap />
              </div>
            </div>
          </div>
          <div className="flex gap-x-8">
            <IntroResume />
            <IntroLinkedin />
            <IntroGithub />
            <IntroEmail />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="hidden intro-img-container lg:flex items-center justify-center"
        >
          <div className="portfolio-image-container">
            <Image
              className="portfolio-image"
              src="/images/portfolio-photo.jpg"
              alt="devan-photo"
              width={1000}
              height={1300}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
