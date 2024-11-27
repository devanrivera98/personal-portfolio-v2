"use client";

export default function FooterResume() {
  return (
    <>
      <button
        className="text-white font-bold bg-red-600 hover:bg-darkRed rounded-md py-3 px-6"
        onClick={() => window.open("/images/devan-rivera-resume.pdf", "_blank")}
        aria-label="Download Devan Rivera's resume"
      >
        Resume
      </button>
    </>
  );
}
