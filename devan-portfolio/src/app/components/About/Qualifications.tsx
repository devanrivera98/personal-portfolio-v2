import AllExperience from "./AllExperience";

export default function Qualifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education Section */}
      <div className="flex flex-col">
        <h1 data-aos="fade-down" className="text-2xl font-bold pb-4">
          Education
        </h1>
        <div className="mb-6">
          <h2 data-aos="fade-down" className="text-xl font-medium">
            LearningFuze
          </h2>
          <p data-aos="fade">Web Development Diploma</p>
          <p data-aos="fade" className="text-sm">
            Graduated in 2023
          </p>
        </div>
        <div>
          <h2 data-aos="fade-down" className="text-xl font-medium">
            University of California, Irvine
          </h2>
          <p data-aos="fade">Bachelor&#x2019;s Degree - Psychology</p>
          <p data-aos="fade" className="text-sm">
            Graduated in 2020
          </p>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="flex flex-col">
        <h1 data-aos="fade-down" className="text-2xl font-bold pb-4">
          Experience
        </h1>
        <AllExperience />
      </div>
    </div>
  );
}
