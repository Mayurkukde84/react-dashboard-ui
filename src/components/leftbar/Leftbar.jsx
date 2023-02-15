import React from 'react'
import './leftbar.css'
import {RxDashboard} from 'react-icons/rx';
import {BsFileBarGraph,BsPeople} from 'react-icons/bs'
import {BiMessageAltDetail} from 'react-icons/bi'
import {TbChartRadar} from 'react-icons/tb'
import {CgPerformance} from 'react-icons/cg'
import {AiOutlineHistory} from 'react-icons/ai'
const Leftbar = () => {
  return (
    <div className='left-Container'>
    <div className="logo">
    <h3>Horizon</h3>
    </div>
    <div className="user-profile">
      <div className="user-img">
        <img src='https://randomuser.me/api/portraits/men/11.jpg' alt='img' />
      </div>
      <h5>Daniel Kevin</h5>
      <p>danielkevin@gmail.com</p>
    </div>
    <div className="list-services">
      <div className="dashboard">
   
        <p><RxDashboard />Dashbard</p>
      </div>
      <div className="statistics">
        <p><BsFileBarGraph/>Statistic</p>
      </div>
      <div className="audience">
        <p><BsPeople/>Audience</p>
      </div>
      <div className="dashboard">
        <p><BiMessageAltDetail/>Massage</p>
      </div>
      <div className="dashboard">
        <p><TbChartRadar/>Campaigns</p>
      </div>
      <div className="dashboard">
        <p><CgPerformance/>Performance</p>
      </div>
      <div className="dashboard">
        <p><AiOutlineHistory/>History</p>
      </div>
    </div>
      
    </div>
  )
}

export default Leftbar