import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const navLinks = [
  {
    name: "Experience",
    link: "#Experience",
  },
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Contact",
    link: "#Contact",
  },
];

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0 md:flex justify-between items-center py-4 md:px-8 px-7 mb-8">
      <div className="flex items-center cursor-pointer">
        <img src="/letter-c.png" alt="" className="w-8 h-8" />
        <img src="/letter-t.png" alt="" className="w-8 h-8" />
      </div>
      <div
        onClick={() => SetIsOpen(!isOpen)}
        className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
      >
        {isOpen ? (
          <AiOutlineClose className=" text-[#fcfcfc]" />
        ) : (
          <RiMenu5Line className=" text-[#fcfcfc]" />
        )}
      </div>
      <ul
        className={`md:flex md:items-center md:pb-0 pb-5 mt-4 absolute md:static bg-[#0f0f0f]  md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          isOpen ? "top20" : "top-[-490px]"
        } ${isOpen ? "border-y-[0.5px] border-y-[#fcfcfc84]" : ""}`}
      >
        {navLinks.map((item) => (
          <li key={item.name} className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href={item.link}
              className="text-[#fcfcfc] hover:text-[#fcfcfc84] duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
