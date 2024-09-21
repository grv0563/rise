import React from "react";
import "./QRgenerator.css";
import Footer from "../../components/Footer";
import QRCode from "react-qr-code";
import NavigationBar from "../../components/NavigationBar";
import LoggedIN_navBar from "../../components/LoggedIN_navBar";
let value="https://staging.grvnotes.com/afterscan"
function QRgenerator() {
  return (
    <div className="qrcode-conatiner">
      <div className="qrcode-header">
        <LoggedIN_navBar />
      </div>
      <div className="qrcode-main-area">
        <h2>Please scan QR Code to get Patient's Health records</h2>
        <QRCode
        className="qr-code-styles"
          size={256}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className="qrcode-footer">
        <Footer />
      </div>
    </div>
  );
}

export default QRgenerator;
