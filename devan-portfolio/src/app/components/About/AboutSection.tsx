import Image from "next/image";
import "./about.scss";
import SpeechButton from "./client/SpeechButton";
import Qualifications from "./Qualifications";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="pt-16 md:pt-32">
        <div>
          <h1 className="text-2xl text-gray-500 about-title"> ABOUT ME</h1>
        </div>
        <div className="py-28 flex flex-col md:flex-row gap-x-10">
          <div
            data-aos="fade-up"
            className="basis-1/3 lg:basis-1/4 grow pb-5 md:pb-0"
          >
            <Image
              src="/images/devan-emoji.png"
              alt="devan-photo"
              width={600}
              height={600}
              className="rounded-xl w-full"
            />
          </div>
          <div className="basis-2/3 lg:basis-3/4">
            <div className="pb-5">
              <h1 data-aos="fade-down" className="text-4xl">
                Devan Rivera
              </h1>
              <div className="flex gap-x-2">
                <p data-aos="fade" data-aos-delay="200">
                  /Dev-an Riv-er-uh/
                </p>
                <SpeechButton />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col gap-y-5 text-lg"
            >
              <p>
                I&apos;m Devan Rivera, a dedicated software engineer focused on
                creating innovative web solutions that prioritize user
                experience. My work spans across various projects, from
                engineering responsive landing pages to developing complex web
                applications, all aimed at solving real-world problems and
                driving engagement. With a strong proficiency in{" "}
                <b>
                  React, JavaScript, content management platforms, and modern
                  CSS frameworks,
                </b>{" "}
                I bring both creativity and technical expertise to every
                project.
              </p>
              <p>
                My approach to development is both methodical and creative,
                ensuring efficient problem-solving and high-quality outcomes. I
                continuously seek opportunities to learn and adapt, always
                staying current with the latest technologies. I thrive in
                collaborative environments and am eager to contribute to a team
                where I can leverage my skills to drive impactful results.
                Explore my portfolio to see examples of my work, and feel free
                to reach out to discuss potential collaborations.
              </p>
            </div>
          </div>
        </div>
        <Qualifications />
      </section>
    </>
  );
}
