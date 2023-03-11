import React from "react";
import "./Dashboard.css";
import { AiOutlineSearch, AiTwotoneBell, AiFillHeart } from "react-icons/ai";
import { images } from "../Constants/Index";
import {
  HiArrowTrendingUp,
  HiArrowTrendingDown,
  HiFire,
} from "react-icons/hi2";
import { BsFillCollectionFill } from "react-icons/bs";
import Todo from "./Todo";
import Team from "./Team";
import Charts from "./Charts";

const Card = () => {
  return (
    <div className="bg-black text-white w-5/12 p-2 lg:w-2/12 lg:h-96 rounded-2xl lg:text-lg lg:px-2 lg:py-4 flex flex-col gap-2 absolute lg:top-28 lg:right-20  lg:mt-0 -mt-5 right-6    z-999 ">
      <div className="card_top">
        <p className="font-bold">Jese Leos</p>
        <p className="text-sm">name@example.com</p>
      </div>
      <hr />
      <div className="account my-2">
        <p className="mb-3">My Profile</p>
        <p>Account Settings</p>
      </div>
      <hr />
      <div className="bottom flex-col flex gap-5">
        <p className="flex items-center gap-2 text-lg">
          <AiFillHeart />
          My Likes
        </p>
        <p className="flex items-center gap-2 text-lg">
          <BsFillCollectionFill />
          My Collections
        </p>
        <p className="flex items-center gap-2 text-lg">
          <HiFire className="yellow " />
          Go Pro
        </p>
      </div>
      <hr />
      <p className="mt-3">Sign Out</p>
    </div>
  );
};

const DbRight = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="lg:w-8/12 flex md:-ml-16 lg:ml-0   flex-col  gap-10  p-2 mb-44 lg:mb-0">
      {/* -----TOP----------- */}
      <div className="flex lg:flex-row lg:items-center -ml-6 gap-5   lg:justify-between">
        <div className="search flex item-center ">
          <AiOutlineSearch className="relative top-3 left-10 text-2xl yellow" />
          <input
            type="text"
            placeholder="Search"
            className="input lg:w-96 w-44 bg-black  yellow rounded-full pl-11 "
          />
        </div>
        <div className="topright flex gap-5">
          <div className="indicator">
            <div className="bg_yellow rounded-full p-3 ">
              <AiTwotoneBell className="text-black text-2xl" />
            </div>
            <div className="bg-black rounded-full w-3 h-3 -ml-3">.</div>
          </div>
          <button
            className="w-16 -ml-2"
            onClick={() => {
              toggleMenu ? setToggleMenu(false) : (() => setToggleMenu(true))();
            }}
          >
            <img src={images.av2} className="rounded-xl" alt="" />
          </button>
        </div>
      </div>

      {toggleMenu && (
        <div className=" ">
          <Card />
        </div>
      )}

      {/* ------------STATS---------------- */}
      <div>
        <div className="stats  flex flex-col items-center lg:flex-row  gap-12 bg-transparent">
          <div className="stat bg_yellow text-black rounded-xl ">
            <div className="">Total Sales</div>
            <div className="flex items-center justify-between">
              <div className="stat-value">721K</div>
              <div className="flex items-center text-xs gap-1">
                <p>+11.01%</p>
                <HiArrowTrendingUp />
              </div>
            </div>
          </div>
          <div className="stat bg-black yellow rounded-xl">
            <div className="">Visits</div>
            <div className="flex items-center justify-between">
              <div className="stat-value">367K</div>
              <div className="flex items-center text-xs gap-1">
                <p>+9.15%</p>
                <HiArrowTrendingUp />
              </div>
            </div>
          </div>
          <div className="stat bg_yellow text-black rounded-xl">
            <div className="">New Users</div>
            <div className="flex items-center justify-between">
              <div className="stat-value">1156</div>
              <div className="flex items-center text-xs gap-1">
                <p>-0.56%</p>
                <HiArrowTrendingDown style={{ transform: "scaleX(-1)" }} />
              </div>
            </div>
          </div>
          <div className="stat bg-black yellow rounded-xl">
            <div className="">Active Sales</div>
            <div className="flex items-center gap-3 justify-between">
              <div className="stat-value">239K</div>
              <div className="flex items-center text-xs gap-1">
                <p>-1.48%</p>
                <HiArrowTrendingDown
                  style={{ transform: "scaleX(-1)", zIndex: "-1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------HERO----------- */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hero-left flex flex-col gap-4 lg:gap-8">
          <div className="charts bg_yellow p-5 w-96 rounded-2xl">
            <div>
              <p className="text-black font-bold">Activities</p>
            </div>
            <Charts />
          </div>

          {/* ----------TODO--------------- */}
          <Todo />
        </div>
        <div className="hero-right flex flex-col  gap-8">
          {/* --------BLACK GRAPH-------------- */}
          <div className="p-5 bg_yellow  rounded-2xl flex flex-col text-black justify-center gap-2">
            <img src={images.Graph} alt="" />
            <div className="ml-2">
              <p className="text-xl font-bold ">Orders</p>
              <p>
                <span className="text-green-500">(+23%)</span> in last week
              </p>
            </div>
          </div>

          {/*-------ADD MEMBERS----------------- */}
          <Team />
        </div>
      </div>
    </div>
  );
};

export default DbRight;
