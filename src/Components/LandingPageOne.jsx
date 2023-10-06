import React from "react";
import Boyimage from "../Images/HomePageBoy.png";
import Ellipse from "../Images/Ellipse 46.png";
import greenEllipse from "../Images/Ellipse 48.png";
import rightEllipse from "../Images/Ellipse 49.png";
import GreenSubstract from "../Images/Subtract (1)green.png";
import subtract from "../Images/Subtract.png";
import yelloellipse from "../Images/Ellipse 47.png";
function LandingPageOne() {
  return (
    <>
      <div className="LandingPageOne flex flex-wrap bg-[#F8F1D3] justify-evenly pt-[10rem] mobile:pt-6 border-2">
        <div className="leftside mobile:text-center tablet:text-center">
          <div className=" mb-[1rem] mobile:max-w-[40px] ">
            <img src={Ellipse} />
          </div>
          <p className="text-lg font-semibold">
            Discover the beauty of the topics
          </p>
          <p className="text-[3rem] font-bold mobile:mr-5 tablet:mr-5">Tropical</p>
          <p className="text-[3rem] font-bold">Destination</p>

         <div className=" mobile:max-w-[100%] w-[75%]  tablet:text-justify  mobile:text-justify"> <p className="text-[3rem] mobile:text-center tablet:text-center tablet:ml-[12rem] mobile:ml-11 font-[500]">For Students</p>
          <p className="text-[#505C59] text-[0.85rem] mt-7 mobile:text-center">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae vitae
          </p></div>
          <div className="absolute left-[38rem] mobile:hidden tablet:hidden ">
            <img src={subtract} />
          </div>
          <button className="bg-[#F27A44] hover:bg-[#df794a] mt-9 hover:text-white text-white  py-2 px-8 text-sm rounded-full">
            SIGN UP
          </button>
          <div className="absolute left-[20rem]  mobile:hidden tablet:hidden">
            <img src={yelloellipse} />
          </div>
        </div>
        <div>
          <div className="relative left-[9rem]  top-[3rem] mobile:hidden tablet:hidden">
            <img src={greenEllipse} />
          </div>
        </div>
        <div className=" max-w-[400px] mobile:mr-[2rem]  tablet:mr-[2rem]  p-6 ml-[4rem] mb-[5rem]">
          <img src={Boyimage} />
          <img src={GreenSubstract} className="relative left-[18rem] mobile:hidden tablet:hidden" />
        </div>
        <div className="absolute right-[35rem]  mobile:hidden tablet:hidden    top-[28rem] ">
          <img src={rightEllipse} />
        </div>
      </div>
    </>
  );
}

export default LandingPageOne;
