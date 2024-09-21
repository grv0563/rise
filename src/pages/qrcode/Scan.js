import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import "./Scan.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import NavigationBar from "../../components/NavigationBar";
import LoggedIN_navBar from "../../components/LoggedIN_navBar";

function Scan() {
  const [scanresult, setscanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        height: 400,
        width:400,
      },
      fps: 5,
    });
    scanner.render(onSuccess, onFailure);

    function onSuccess(result) {
      scanner.clear();
      setscanResult(result);
      
    }

    function onFailure(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="qrscan-container">
      <div className="qrscan-header">
        <LoggedIN_navBar />
      </div>
      <div className="qrscan-main-area">
        {scanresult ? (
          <div className="qr-scan-result">
            
            Success : <a href={scanresult}>{scanresult}</a>{" "}
            {window.location.replace("https://staging.grvnotes.com/afterscan")}
          </div>
          
        ) : (
          <div id="reader"></div>

        )}
      </div>
      <div className="qrscan-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Scan;
