import React from "react";
import "./leftbar.css";
import { RxDashboard } from "react-icons/rx";
import { BsFileBarGraph, BsPeople } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { TbChartRadar } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineHistory } from "react-icons/ai";
import {FiLogOut} from 'react-icons/fi'
const Leftbar = () => {
  return (
    <div className="left-Container">
      <div className="logo">
        <h3>Horizon</h3>
      </div>
      <div className="user-profile">
        <div className="user-img">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="img" />
        </div>
        <h5>Daniel Kevin</h5>
        <p>danielkevin@gmail.com</p>
      </div>
      <div className="list-services">
        <div className="icon-list dashboard">
          <p>
            <span className="actives"><RxDashboard /></span>
            Dashbard
          </p>
        </div>
        <div className="icon-list">
          <p>
            <span><BsFileBarGraph /></span> 
            Statistic
          </p>
        </div>
        <div className="icon-list">
          <p>
            <span><BsPeople /></span> 
            Audience
          </p>
        </div>
        <div className="icon-list">
          <p>
          <span><BiMessageAltDetail /></span>
            
            Massage
          </p>
        </div>
        <div className="icon-list">
          <p>
          <span> <TbChartRadar /></span>
           
            Campaigns
          </p>
        </div>
        <div className="icon-list">
          <p>
          <span><CgPerformance /></span>
            
            Performance
          </p>
        </div>
        <div className="icon-list">
          <p>
          <span><AiOutlineHistory /></span>
            
            History
          </p>
        </div>
        <div className="icon-list logout">
          <p>
          <span><FiLogOut /></span>
            
            LogOut
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
