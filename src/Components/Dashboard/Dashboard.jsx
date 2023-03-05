import React from "react";
import "./Dashboard.css";
import av1 from "../../assets/avatar.png";
import Be from "../../assets/Be.png";
import Dc from "../../assets/Dc.png";
import Fb from "../../assets/Fb.png";
import Go from "../../assets/Go.png";
import Li from "../../assets/Li.png";

const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <div className="container__left">
          <div className="left__container-details">
            <div className="info">
              <img src={av1} alt="" />
              <h2 className="text-red-500">EKKO</h2>
              <p>www.ekko.network</p>
              <div className="social-icons">
                <img src={Fb} alt="" />
                <img src={Be} alt="" />
                <img src={Li} alt="" />
                <img src={Dc} alt="" />
                <img src={Go} alt="" style={{ width: "1.5%" }} />
              </div>
            </div>
            <div className="routes"></div>
            <div className="personals"></div>
          </div>
          <div className="left__container-settins"></div>
        </div>
        <div className="container__right"></div>
      </div>
    </div>
  );
};

export default Dashboard;
