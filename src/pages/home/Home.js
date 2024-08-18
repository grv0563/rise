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
          <div className="home-main-area-intro-1">
            <div className="home-main-area-intro-header">
              <h1>
                Revitalizing Healthcare ecosystem with <span></span>
              </h1>
              <h1 className="home-main-area-intro-header-colored-text">
                {" "}
                Decentralized EHR System
              </h1>
            </div>
            <div className="call-to-action">
              <button className="btn">RoadMap</button>
              <button className="btn">Connect</button>
            </div>
            <p>
              We are pushing boundaries of Healthcare system with Blockahin
              Technology
            </p>
            <p >
              Follow us on <a href="#">Linkedin</a>
            </p>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
