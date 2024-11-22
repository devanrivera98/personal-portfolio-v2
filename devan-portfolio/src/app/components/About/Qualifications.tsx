import AllExperience from "./AllExperience"

export default function Qualifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold pb-4">Education</h1>
        <div className="mb-6">
          <h2 className="text-xl font-medium">LearningFuze</h2>
          <p>Web Development Diploma</p>
          <p className="text-sm">Graduated in 2023</p>
        </div>
        <div>
          <h2 className="text-xl font-medium">University of California, Irvine</h2>
          <p>Bachelor&#x2019;s Degree - Psychology</p>
          <p className="text-sm">Graduated in 2020</p>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold pb-4">Experience</h1>
        {/* <div className="mb-6">
          <h2 className="text-xl font-bold">Front End Engineer</h2>
          <p>Freelance</p>
          <p className="text-sm">Jul 2023 - Present</p>
          <div className="flex">
            <p className="hidden overflow-hidden text-ellipsis whitespace-nowrap">Constructed a responsive user interface for Advanced Building Services’ landing page, improving user engagement and attracting 300+ unique visitors in the first month, with positive feedback on usability and functionality.</p>
            <button className="hidden text-xs whitespace-nowrap">See More</button>
            <ul className="flex flex-col gap-y-2 list-disc list-inside">
              <li>Constructed a responsive user interface for Advanced Building Services’ landing page, improving user engagement and attracting 300+ unique visitors in the first month, with positive feedback on usability and functionality.</li>
            </ul>
          </div>
        </div> */}
        <AllExperience />
        <div className="mb-6">
          <h2 className="text-xl font-bold">Billing Specialist</h2>
          <p>Emergency Ambulance Service</p>
          <p className="text-sm">Feb 2022 - Feb 2023</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Retail Associate</h2>
          <p>Adidas</p>
          <p className="text-sm">Sep 2018 - Jan 2021</p>
        </div>
      </div>
    </div>
  );
}
