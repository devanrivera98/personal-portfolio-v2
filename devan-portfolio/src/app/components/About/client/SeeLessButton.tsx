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
        <button
          className="text-xs hover:underline hover:underline-offset-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          See Less
        </button>
      </div>
    </>
  );
}
