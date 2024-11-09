import "./introduction.scss";
import Image from "next/image";
import ToolsMap from "./ToolsMap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Introduction() {
  return (
    <>
      <section className="mt-14 flex flex-col lg:flex-row">
        <div className="intro-text-container flex flex-col gap-y-10">
          <h1 data-aos="fade-up" className="text-5xl lg:text-6xl font-semibold">
            Hello, I'm <br className="hidden lg:block"></br> Devan Rivera.
          </h1>
          <h2 data-aos="fade-down" className="text-4xl text-darkRed font-semibold">
            I Transform Pixels Into Ideas
          </h2>
          <div data-aos="fade-up">
            <p data-aos-delay="800" className="text-xl">
              I am a Los Angeles based Front End Developer skilled in building
              user-centric interfaces with{" "}
              <span className="text-darkRed">React</span>, showcasing diverse
              personal and freelance projects.
            </p>
            <div>
              <h1 className=" text-2xl py-4">Technical Proficiencies:</h1>
              <div>
                <ToolsMap />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-x-8">
            <button className="text-white font-bold bg-darkRed rounded-md py-3 px-6">Resume</button>
            <button>
              <FaLinkedin className="hover:text-darkRed"  size={30} />
            </button>
            <button>
              <FaGithub className="hover:text-darkRed"  size={30} />
            </button>
            <button>
              <MdEmail className="hover:text-darkRed"  size={30} />
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
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
