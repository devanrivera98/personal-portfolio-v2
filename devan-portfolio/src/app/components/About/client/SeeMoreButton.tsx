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
        className="text-xs whitespace-nowrap"
        onClick={() => setIsOpen(!isOpen)}
      >
        See More
      </button>
    </>
  );
}
