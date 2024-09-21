import React from "react";
import "./QRgenerator.css";
import Footer from "../../components/Footer";
import QRCode from "react-qr-code";
let value="https://staging.grvnotes.com/afterscan"
function QRgenerator(props) {
  return (
    <div className="qrcode-conatiner">
      <div className="qrcode-header">
        
      </div>
      <div className="qrcode-main-area">
        <h2>Please scan QR Code to get {props.name}'s Health records</h2>
        <QRCode
        className="qr-code-styles"
          size={256}
          value={props.qrcodeURL}
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
