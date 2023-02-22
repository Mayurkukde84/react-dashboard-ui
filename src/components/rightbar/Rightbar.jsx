import React from "react";
import "./rightbar.css";
const Rightbar = () => {
  return (
    <div className="right-container">
      <nav>
        <input placeholder="Search..." />
      </nav>
      <div className="map">
        <h3>Customer by country</h3>
        <h3>...</h3>
        <p>Map</p>
      </div>
      <div className="recentSales">
        <div className="recent-viewAll">
          <h3>Recent Sales</h3>
          <p>View All</p>
        </div>
        <p>profiles</p>
      </div>
    </div>
  );
};

export default Rightbar;
