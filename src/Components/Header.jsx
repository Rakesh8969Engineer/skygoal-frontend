import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [nav, setNav] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleIconClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      <div className="bg-[#ffffff] flex justify-around p-4 mobile:p-6 tablet:p-7 ml-7 ">
        <ul className="flex gap-6 text-[1rem] p-2 mobile:hidden tablet:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Schedules</li>
          <li>Membership</li>
          <li>Pricing</li>
        </ul>
        <ul className="flex gap-3 relative left-[8rem] mr-2 mobile:hidden tablet:hidden">
          <button className="mr-6 text-[#7D7D7D]">Offers</button>

          <button className="bg-[#F27A44] hover:bg-[#ba9685]  hover:text-white text-white  py-2 px-4 rounded-full">
            Courses
          </button>
        </ul>

        <div className="absolute right-4 top-2.5">
          <div className="menu-icon" onClick={handleIconClick}>
            {isMenuOpen ? (
              <AiOutlineClose
                onClick={handleNav}
                size={30}
                className="border"
              />
            ) : (
              <AiOutlineMenu
                onClick={handleNav}
                className="z-20 text-black cursor-pointer hidden mobile:block tablet:block border"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-full bg-black px-4 py-5 flex-col z-10 mt-[3rem] pt-[3rem]"
            : "absolute top-  top-[-100%] ease-in duration-300 z-10 "
        }
      >
        <ul className="alignment flex flex-col gap-[3rem] items-center ">
          <li className="dd-li">
            <a href="/">Home</a>
          </li>

          <li>About</li>
          <li>Schedules</li>
          <li>Membership</li>
          <li>Pricing</li>
        </ul>


        <ul className="flex tablet:justify-center tablet:items-center  gap-3 flex-col mt-6 p-2 ">
          <button className="mr-4 text-[#7D7D7D]">Offers</button>

          <button className="bg-[#F27A44] hover:bg-[#ba9685] tablet:w-1/2 hover:text-white text-white  py-1 px-3 mt-4 rounded-full">
            Courses
          </button>
        </ul>
      </div>
    </>
  );
}

export default Header;
