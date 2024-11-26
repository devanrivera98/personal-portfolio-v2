"use client";

export default function SeeMoreButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <>
      <button
        data-aos="fade"
        className="text-xs whitespace-nowrap hover:underline hover:underline-offset-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        See More
      </button>
    </>
  );
}
