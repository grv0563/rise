import React from "react";
import "./Vision.css";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import VisionImg from "../../assets/vision.png";
import AimImg from "../../assets/aim.png";

function Vision() {
  return (
    <div className="vision-container">
      <div className="vision-header">
        <NavigationBar />
      </div>
      <div className="vision-main-area">
        <div className="roadmap-for-implementation ">
          <div className=" phase-common-css">
            <h3> Vision Statement</h3>
            <div className="vision-flowchart">
              <img src={VisionImg} alt="Compnay Vision" />
            </div>
          </div>
          <div className=" phase-common-css  aim-image">
            <h3>
              {" "}
              Ulimate Vision <img src={AimImg} alt="Compnay Vision" /> -
              Improving Public Health Delivery, Healthcare Provider's Efficiency and Effectivness, Patient Experience, Accessibility and
              Medical Research
            </h3>
          </div>
        </div>
      </div>
      <div className="vision-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Vision;
