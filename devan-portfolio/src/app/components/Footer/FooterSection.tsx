import "./footerSection.scss";
import FooterResume from "./client/FooterResume";
import FooterLinkedin from "./client/FooterLinkedin";
import FooterGithub from "./client/FooterGithub";

export default function FooterSection() {
  return (
    <>
      <section className="py-20 md:pt-32">
        <span className="footer-title text-2xl text-gray-500"> SAY HI</span>
        <div className="flex flex-col py-20 gap-y-2">
          <div>
            <span className="font-semibold transition-colors delay-100 hover:text-darkRed text-2xl">
              <a href='mailto:"devanrivera98@gmail.com"'>
                devanrivera98@gmail.com
              </a>
            </span>
          </div>
          <span>
            I'm always excited to discuss new opportunities and collaborations.
            Feel free to reach out via email —I'd love to hear from you!
          </span>
        </div>
        <div className="flex gap-x-8">
          <FooterResume />
          <FooterLinkedin />
          <FooterGithub />
        </div>
      </section>
      <div className="flex justify-end">
        <span className="text-gray-500">Developed by Devan Rivera</span>
      </div>
    </>
  );
}
