import React from "react";
import avatar1 from "../Images/avatar1.png";
import Circle from "../Images/WhiteCircle.png";
import Corner from "../Images/Ellipse 56.png";
function LandingPageTwo() {
  return (
    <>
      <div className="mobile:hidden tablet:hidden">
        <img
          src={Circle}
          className="float-right max-w-[10%] mr-[14.85rem] mt-[2.5rem]"
        />
      </div>

      <div className="landing-pageTwo flex justify-evenly flex-wrap mt-[13rem] mobile:flex-col tablet:flex-col mobile:mt-[4rem] tablet:mt-[5rem] gap-2">
        <div className="left-side max-w-[40%] mobile:max-w-full tablet:max-w-full flex flex-col gap-[3rem] ">
          <div className="shadow-lg rounded-xl p-3 tablet:p-1 shadow-neutral-400 inline-block ">
            <ul className="flex tablet:justify-center">
              <li>
                <img src={avatar1}></img>
              </li>
              <li className="ml-3">
                <p className="font-bold">Jenny Wilson</p>
                <p>
                  Lorem ipsum dolor sit amet, <br></br> consectetur
                  adipiscing...
                </p>
              </li>
            </ul>
          </div>
          <div className="shadow-lg rounded-xl   mobile:max-w-full    tablet:max-w-full p-4 shadow-neutral-400  inline-block">
            <ul className="flex tablet:justify-center">
              <li>
                <img src={avatar1}></img>
              </li>
              <li className="ml-3">
                <p className="font-bold">Jenny Wilson</p>
                <p>
                  Lorem ipsum dolor sit amet, <br></br> consectetur
                  adipiscing...
                </p>
              </li>
            </ul>
          </div>
          <div className="shadow-lg rounded-xl p-4  mobile:max-w-full    tablet:max-w-full shadow-neutral-400 	 inline-block">
            <ul className="flex tablet:justify-center">
              <li>
                <img src={avatar1}></img>
              </li>
              <li className="ml-3">
                <p className="font-bold">Jenny Wilson</p>
                <p>
                  Lorem ipsum dolor sit amet, <br></br> consectetur
                  adipiscing...
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side mt-[1rem] tablet:text-center">
          <div className=" max-w-[10%] relative right-[5.15rem] bottom-[2.85rem]">
            <img src={Corner} alt="" className="" />
          </div>

          <p className="font-semibold text-[2rem] mobile:text-center">Tropical Adventrue</p>

          <p className="text-[1.5rem] font-[500] mt-[-0.4rem] mobile:text-center">For Students</p>
          <p className="text-[1rem] font-[600] mobile:text-center">
            Student Tropical Vacation: Relax and Recharge
          </p>
          <ul className="list-disc font-[#000000] text-[0.85rem] mt-5 ml-4 flex flex-col gap-1 mobile:ml-9 tablet:list-none">
            <li>Lorem ipsum dolor sit.ght</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li> Lorem ipsum dolor sit amet.</li>
            <li> lorem skfh fhgn sf </li>
            <li> Lorem, ipsum dolor .sdeg gkt.</li>
          </ul>
          

          <div className="mobile:flex mobile:justify-center tablet:flex tablet:justify-center">


          <button className="bg-[#F27A44] hover:bg-[#df794a] mt-[3rem] mobile:mt-11 tablet:mt-[3.15rem] hover:text-white text-white  py-3 px-9 rounded-full ">
            Explore More
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageTwo;
