import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import constructing from "/Images/img1.png"
function Info_yama() {
  return (
    <>
      <div className="yamainfo w-full h-[100vh] flex">
        <div className="info w-[50%] h-full text-white flex flex-col gap-5 justify-center items-center">
          <div className="heading text-5xl w-[90%] mx-auto">Welcome to Yama Constructions Real Solutions.</div>
          <div className="frist flex items-center justify-start text-4xl text-[#f96e2b] w-[90%] mx-auto"><TiTickOutline />Specializes in designing and constructing</div>
          <div className="frist flex items-center justify-start text-4xl text-[#f96e2b] w-[90%] mx-auto"><TiTickOutline className='text-[3rem]' />Strong understanding of our clients' needs and goals</div>
          <div className="frist flex items-center justify-start text-4xl text-[#f96e2b] w-[90%] mx-auto"><TiTickOutline className='text-[4rem]' />Architectural design, engineering, and construction management</div>
          <div className="frist flex items-center justify-start text-4xl text-[#f96e2b] w-[90%] mx-auto"><TiTickOutline />Environmental impact of our projects</div>
          <div className="frist flex items-center justify-start text-4xl text-[#f96e2b] w-[90%] mx-auto"><TiTickOutline />Sustainable engineering solutions</div>
        </div>
        <div className="info_img w-[50%] h-full flex flex-col text-white justify-center items-center">
          <img src={constructing} alt="" />
        </div>
      </div>
    </>
  )
}

export default Info_yama