import { IoIosArrowDown } from "react-icons/io";

export default function NavigationButton() {
  return (
    <>
      <div className="flex justify-center">
        <a aria-label="Navigate to Projects" href="#projects">
          <IoIosArrowDown size={32} />
        </a>
      </div>
    </>
  );
}
