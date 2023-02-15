import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="title">
        <h3>Dashboard</h3>
      </div>
      <div className="card-item">
      <div className="top-heading">
      <h5>Total Revenue</h5>
      </div>
        
        <div className="price">
          <h4>$11,354.00</h4>
          <p>+6.32%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
