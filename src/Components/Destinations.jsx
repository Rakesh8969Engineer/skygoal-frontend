import React from "react";
import { DestinationApi } from "../Api/DestinationsApi";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
function Destinations() {
  return (
    <>
      <div className="mt-[8rem] mobile:mt-[4rem]">
        <p className="font-[500] text-3xl pl-[6rem]">Our Destinations</p>
      </div>
      <div className="grid grid-cols-4 mobile:grid-cols-1  tablet:grid-cols-2  mobile:max-w-full tablet:gap-3   mt-[4rem] ml-9 px-[4rem] monile:px-[0.15rem] mobile:ml-0">
        {DestinationApi.map((University) => (
          <div className="Destination ">
            <div className="image max-w-[95%] mobile:max-w-full tablet:max-w-full">
              <img
                src={University.image}
                alt="University-logo"
                className="h-[280px] "
              />
            </div>
            <div className="max-w-[25%] mobile:max-w-full">
              <p className="text-xl font-bold inline">
                {University.UniversityName}
              </p>
            </div>
            <p>{University.Address}</p>
          </div>
        ))}
        
      </div>
      <div className="mt-[4rem] flex justify-center items-center gap-1 ">
        

        <span><WestIcon  /></span>
          <span className="font-semibold text-2xl">2</span>
          <span className="text-sm text-[#7D7D7D]">/140</span>
          <span><EastIcon className="text-[#ed4040]" /></span>
          <span></span>

        
        </div>
    </>
  );
}

export default Destinations;
