import React, { useState } from "react";
import "./Dashboard.css";
import Footer from "../../../components/Footer";
import SearchBar from "../componenets/SearchBar";
import Notification from "../componenets/Notification";
import DashboardPagination from "../componenets/DashboardPagination";
import LoggedIN_navBar from "../../../components/LoggedIN_navBar";
import HealthRecords from "./HealthRecords";



function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <LoggedIN_navBar userName="Dr. Gaurav Shakya" urlName="/docterqrcode" />
      </div>
      <div className="dashboard-mainarea">
        <h1>Doctor's EHR dashboard</h1>
        <p>
          Please click on below scan button to view the Patient's complete
          Health Records
        </p>
        <button className="btn">
          <a href="/qrscan">scan QR</a>
        </button>
        <p>
          Scan this QR to view the Provider's(e.g Docter) information such as
          speciality
        </p>
        <button className="btn">
          <a href="/docterqrcode">show QR</a>
        </button>
        <hr></hr>
        <h1>Administer Patients</h1>
        <hr></hr>

        <div className="patient-adminitration-dashboard">
          <p style={{ textAlign: "left" }}>Search Patient Name</p>
          <div className="patient-adminitration-navigationbar">
            <div className="search-bar">
              <SearchBar />
            </div>
            <div className="notification-bar">
              <Notification />
            </div>
          </div>
          <div>
            <HealthRecords />
          </div>

          <div className="dashboard-pagination">
            <DashboardPagination />
          </div>
        </div>
      </div>
      <div className="dashboard-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
