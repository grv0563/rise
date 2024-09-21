import React from "react";
import Footer from "../../../components/Footer";
import NavigationBar from "../../../components/NavigationBar";

function ResearchDashboard() {
  return (
    <div className="research-dashboard-container">
      <div className="research-dashboard-container-header">
        <NavigationBar/>
      </div>
      <div className="research-dashboard-container-main">
        <h1>Research Dashboard</h1>
      </div>
      <div className="research-dashboard-container-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default ResearchDashboard;
