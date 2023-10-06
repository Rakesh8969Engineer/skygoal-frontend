import React from "react";
import GirlWithBook from "../Images/Group 167.png";
import Ellipselargeyellow from "../Images/Subtract (1)pink large.png";
function Booking() {
  return (
    <>
      <div className="book flex justify-evenly mt-[7rem] mobile:flex-col ">
        <div className="leftside max-w-[350px] mobile:ml-9">
          <img src={GirlWithBook} />
        </div>
        <div className="absolute left-[30rem] mobile:hidden tablet:hidden">
          <img src={Ellipselargeyellow} alt="" />
        </div>
        
         <div className="right max-w-[30%] ml-4  mobile:max-w-full  tablet:max-w-[50%] shadow-lg rounded-xl mt-[5rem] shadow-neutral-400">
          <p className="text-2xl font-bold m-6 mobile:text-lg mobile:text-center">Book Now</p>

          <p className="ml-9 text-[#282828]">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</p>
          <form action="">
            <div className="form-group flex flex-col gap-2 p-4 mt-8 ml-3 text-[#000000]">
              <label htmlFor="name" className="font-semibold">
                CITY
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Placeholder"
                className="px- py-2 mobile:px-2 bg-[#F5F5F5] rounded-lg"
              />
            </div>

            <div className="form-row flex justify-between   text-[#000000] ml-8">
              <div className="form-group flex flex-col ">
                <label htmlFor="name" className="font-semibold">
                  ARRIVAL
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="10 October"
                  className="px-1 py-2 bg-[#F5F5F5] w-[120px]  rounded-lg"
                />
              </div>

              <div className="form-group  text-[#000000] flex flex-col mr-8 ">
                <label htmlFor="email" className="font-semibold">
                  DEPARTURE
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="11 October"
                  className=" px-5 py-2  max-w-[130px] mobile: bg-[#F5F5F5] rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between mt-3 ml-3 text-[#000000] ">
              <div className="ml-[0.8rem]">
                <p className="font-bold ml-2">STAR</p>
                <div className="max-w-[40%] p-2 rounded-xl text-[1rem] mt-2">
                  <span className="bg-[#EBEBEB] px-5 mobile:px-1 py-3 font-bold">-</span>
                  <span className="px-9 bg-[#F3F3F3] text-[#746f6f] py-3 ">4</span>
                  <span className="bg-[#EBEBEB] px-5 py-3 font-bold">+</span>
                </div>
              </div>

              <div className="pr-5 ">
                <p className="font-bold ml-2 mobile:ml-2">STAR</p>
                <div className=" p-2 rounded-xl text-[1rem] mt-2">
                  <span className="bg-[#EBEBEB] px-5 py-3 font-bold">-</span>
                  <span className="px-9 mobile:px-7 bg-[#F3F3F3] text-[#746f6f] py-3 ">4</span>
                  <span className="bg-[#EBEBEB] px-3 py-3 font-bold">+</span>
                  
                </div>
              </div>
            </div>

           <div className="p-5 ml-2 mb-4 mobile:flex mobile:justify-center">


           <button className="bg-[#000000] hover:bg-[#ffffff] mt-[3rem] hover:text-black hover:font-bold text-white  py-3 px-7 rounded-lg">
              BOOK NOW
            </button>
           </div>
          </form>
        </div> 

        
      </div>
    </>
  );
}

export default Booking;
