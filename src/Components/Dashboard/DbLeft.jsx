import React from "react";
import { images } from "../Constants/Index";
import { MdPeopleOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";

const DbLeft = () => {
  return (
    <div>
      <div className="">
        <div className="bg_yellow md:w-96 rounded-3xl text-white flex flex-col gap-4 py-5 items-center ">
          {/* --------INFO------------------ */}
          <div className="info mt-12 p-2 rounded-3xl flex flex-col gap-2  items-center drop-shadow-xl bg-base-100 pb-5">
            <img
              className="relative w-5/12 -top-16 -mb-16"
              src={images.av1}
              alt=""
            />
            <h2 className="text-white text-3xl font-bold ">EKKO</h2>
            <p>www.ekko.network</p>
            <div className="social-icons flex gap-8 mt-5 items-center justify-center">
              <img src={images.Fb} alt="" className="w-1/12" />
              <img src={images.Be} alt="" className="w-1/12" />
              <img src={images.Li} alt="" className="w-1/12" />
              <img src={images.Dc} alt="" className="w-1/12" />
              <img
                src={images.Go}
                alt=""
                className="w-1/12"
                style={{ width: "8%" }}
              />
            </div>
          </div>
          {/* -------LINKS---------- */}
          <div className="links flex flex-col  gap-1 items-start ">
            <a
              className="flex img-hover p-3 rounded-full text-xl px-5  gap-4 hover:text-white hover:bg-white text-black "
              href="/#"
            >
              <img src={images.Cart} className="bag" alt="" />
              Orders
            </a>
            <a
              className="flex img-hover p-3 rounded-full text-xl px-5  gap-4 hover:text-white hover:bg-white text-black"
              href="/#"
            >
              {" "}
              <MdPeopleOutline className="text-3xl" /> Customers
            </a>
            <a
              className="flex img-hover p-3 rounded-full text-xl px-5  gap-4 hover:text-white hover:bg-white text-black"
              href="/#"
            >
              <img src={images.Box} className="link-img" alt="" />
              Products
            </a>
            <a
              className="flex img-hover p-3 rounded-full text-xl px-5  gap-4 hover:text-white hover:bg-white text-black"
              href="/#"
            >
              <img src={images.Bag} className="link-img" alt="" />
              Marketing
            </a>
            <a
              className="flex img-hover p-3 rounded-full text-xl px-5  gap-4 hover:text-white hover:bg-white text-black"
              href="/#"
            >
              <img src={images.Tag} className="link-img" alt="" />
              Discounts
            </a>
          </div>

          {/* ----------Personals-------- */}
          <div className="personals border-2 border-balck bg-white gap-5 flex justify-center items-center p-8 my-6  rounded-2xl">
            <div className="p-left">
              <img src={images.Circle} className="w-10" alt="" />
            </div>
            <div className="p-right text-black text-lg text-left">
              <p>Personal Account</p>
              <p className="text-sm">Switch to pro plan</p>
            </div>
          </div>
        </div>
        <div className="left__container-settins">
          <div className="left-last flex  gap-5 p-5">
            <div className="text-4xl p-5 bg-black rounded-full yellow">
              <IoSettingsOutline />{" "}
            </div>
            <div className="text-4xl p-5 bg-black rounded-full yellow">
              <BsBrightnessHigh />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbLeft;
