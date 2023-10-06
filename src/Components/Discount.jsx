import React from "react";
import GirlImage from "../Images/HomePageGirl.png";
import Ellipse from "../Images/Ellipse 46.png";
import Ellispe55 from "../Images/Ellipse 55.png";
import Ellipse54 from "../Images/Ellipse 54.png";
import subtractpink from "../Images/Subtract (1)pink.png";
function Discount() {
  return (
    <>
      <div className="Discount flex flex-wrap justify-evenly mt-[10rem]">
        <div className="left-part ">
          <div className=" mb-[1rem]">
            <div className="absolute left-[30rem]">
              <img src={subtractpink} className="mobile:hidden tablet:hidden"/>
            </div>
            <img src={Ellipse} />
          </div>
          <p className="text-lg font-semibold mt-[4rem] mobile:text-center">Get 20% off for student</p>
          <div className="absolute left-[40rem] mobile:hidden tablet:hidden">
            <img src={Ellispe55} />
          </div>
          <p className="text-3xl font-[700] mt-2 mobile:text-center">
            Student discounts available.
          </p>
          <p className="text-2xl mobile:mt-2 mobile:text-xl mobile:text-center">Get ready for some fun in the sun!</p>
          <ul className="list-disc ml-10 mt-6 mobile:ml-[6rem]">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit </li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <div className="mobile:flex mobile:justify-center ">

          <button className="bg-[#F27A44] hover:bg-[#df794a] mt-[3rem] hover:text-white text-white  py-3 px-9 rounded-full ">
            Explore More
          </button>



          </div>
          <div className="absolute left-[34rem] tablet:hidden">
            <img src={Ellipse54} alt="" />
          </div>
        </div>
        <div className=" max-w-[350px]">
          <img src={GirlImage} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Discount;
