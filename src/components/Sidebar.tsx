import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      <TiThMenu
        size={25}
        onClick={() => setOpenSidebar(!openSidebar)}
        className="hidden max-sm:block"
      />
      {openSidebar && (
          <div className="absolute right-4 mt-2 w-60 leading-8 bg-white rounded-md shadow-lg py-2 z-20 transition-all ease-in-out duration-500">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Contact me
            </a>
        </div>
      )}
    </>
  );
};

export default Sidebar;
