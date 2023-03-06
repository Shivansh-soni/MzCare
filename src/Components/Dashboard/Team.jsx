import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { images } from "../Constants/Index";

const Team = () => {
  return (
    <div>
      <div className="md:ml-20 text-black bg_yellow  md:w-10/12 p-5 rounded-2xl ">
        <p className="text-xl font-bold mb-2 ml-4 ">Team</p>
        <div className="flex flex-col gap-5 p-4">
          <label className=" flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={images.t1} alt="" />
              <span className="   text-black text-lg">Rohan shrivastav</span>
            </div>
            <div className="flex gap-3 text-xl">
              <AiOutlineMessage />
              <IoCallOutline />
            </div>
          </label>

          <label className=" flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={images.t2} alt="" />
              <span className="   text-black text-lg">Piyush Joshi</span>
            </div>
            <div className="flex gap-3 text-xl">
              <AiOutlineMessage />
              <IoCallOutline />
            </div>
          </label>

          <label className=" flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={images.t3} alt="" />
              <span className="   text-black text-lg">Sreeja Maheshwari</span>
            </div>
            <div className="flex gap-3 text-xl">
              <AiOutlineMessage />
              <IoCallOutline />
            </div>
          </label>

          <label className=" flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={images.t4} alt="" />
              <span className="   text-black text-lg">Neha Trivedi</span>
            </div>
            <div className="flex gap-3 text-xl">
              <AiOutlineMessage />
              <IoCallOutline />
            </div>
          </label>

          <button className="btn btn-sm w-28 yellow rounded-full mt-5 bg-black">
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
