"use client";

export default function SeeLessButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <>
      <div className="flex justify-end">
        <button className="text-xs" onClick={() => setIsOpen(!isOpen)}>
          See Less
        </button>
      </div>
    </>
  );
}
