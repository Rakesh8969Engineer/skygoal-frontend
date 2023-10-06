import React from "react";
import Avatar1 from "../Images/Frame 6.png";
import Avatar2 from "../Images/Frame 6Testimonial.png"
import Avatar3 from "../Images/Frame 6TestimonialFemale.png"




function Testiomonials() {
  return (
    <>
      <div className="mt-[10rem] mobile:mt-[4rem] tablet:mt-[6rem]">
        <p className="text-center text-3xl font-[500]">Testimonials</p>
        <div className="Testimonials flex mobile:flex-col tablet:gap-1 ml-[10rem] mobile:ml-[0rem] tablet:ml-[3rem] mt-[4rem]">
          <div className="flex flex-col gap-4 mobile:items-center tablet:items-center">
            <div className="mt-3">
              <img src={Avatar1} />
            </div>
            <p>Corey Korsgaard</p>
            <hr  className=" max-w-[30%]"/>
            <div className="max-w-[60%] mobile:max-w-[250px] tablet:max-w-[100%]">
              <p className="word-wrap text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
         <div className="flex flex-col gap-4 mobile:items-center tablet:items-center">
            <div className="mt-3">
              <img src={Avatar2} />
            </div>
            <p>Corey Korsgaard</p>
            <hr  className=" max-w-[30%]"/>
            <div className="max-w-[60%] tablet:max-w-[100%]">
              <p className="word-wrap">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mobile:items-center tablet:items-center">
            <div className="mt-3">
              <img src={Avatar3} />
            </div>
            <p>Corey Korsgaard</p>
            <hr  className=" max-w-[30%]"/>
            <div className="max-w-[60%] tablet:max-w-[100%]">
              <p className="word-wrap">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[10rem] flex flex-col gap-9  items-center">
          <p className="font-[600] text-3xl mobile:text-lg">
            Student Special: Discounted rates<br></br> 
            <p className="ml-[5rem]">on tropical getaways!</p>
          </p>
          
          <p className="ml-[5rem] mobile:ml-7 mobile:text-justify">
            Let’s embody your beautiful ideas together, simplify the<br></br>{" "}
            way you visualize your next big things.{" "}
          </p>
        </div>
      <div className="flex gap-6  mobile:gap-4 mobile:ml-7  mobile:flex-col  justify-center mt-[3rem] mb-[5rem]">
      <ul className="flex gap-4 mobile:gap-1 ">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>Sales And Refunds</li>
          <li>Legal</li>
        </ul>
        <ul className="font-bold flex gap-8 mobile:gap-2">
          <li>About</li>
          <li>Schedules</li>
          <li>Pricing</li>
          <li>Membership</li>
          <li>joins</li>
        </ul>




      </div>



      </div>
    </>
  );
}

export default Testiomonials;
