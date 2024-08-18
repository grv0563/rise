import React from "react";
import "./Home.css";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <div className="home-navbar">
        <NavigationBar />
      </div>

      <div className="home-main-area">
        <div className="home-main-area-intro">
        <h1>Revitalizing Healthcare ecosystem with Decentralized EHR system </h1>
        </div>
      </div>


      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
