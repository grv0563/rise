import React from "react";
import Footer from "../../../components/Footer";
import LoggedIN_navBar from "../../../components/LoggedIN_navBar";

function ResearchDashboard() {
  return (
    <div className="research-dashboard-container">
      <div className="research-dashboard-container-header">
        <LoggedIN_navBar userName="XYZ Medical Research Pvt Ltd" urlName="/researchqrcode" />
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
