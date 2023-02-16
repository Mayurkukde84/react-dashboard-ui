import "./dashboard.css";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Dashboard = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 60) {
        setPercentage(percentage + 1);
      }
    }, 30);
  }, [percentage]);
  return (
    <>
      <div className="dashboard-container">
        <div className="dashbord-title">
          <h4>Dashboard</h4>
        </div>
      <div className="card-container">

      
        <div className="card">
          <div className="card-item">
            <div className="top-heading">
              <h5>Total Revenue</h5>
              <div className="circle">
                <div style={{ width: 35 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`$`}
                  />
                </div>
              </div>
            </div>

            <div className="price">
              <h4>$11,354.00</h4>
              <p>+6.32%</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-item">
            <div className="top-heading">
              <h5>Total Revenue</h5>
              <div className="circle">
                <div style={{ width: 35 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              </div>
            </div>

            <div className="price">
              <h4>$11,354.00</h4>
              <p>+6.32%</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-item">
            <div className="top-heading">
              <h5>Total Revenue</h5>
              <div className="circle">
                <div style={{ width: 35 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              </div>
            </div>

            <div className="price">
              <h4>$11,354.00</h4>
              <p>+6.32%</p>
            </div>
          </div>
        </div>
        </div>
        <div className="spending-statistics">
          <h1>spending statistics</h1>
        </div>
        <div className="latest-order">
          <h1>latest order</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
