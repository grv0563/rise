import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import QRcode from "./pages/qrcode/QRcode";
import Schedules from "./pages/schedules/Schedules";
import Mission from "./pages/mission/Mission";
import Learn from "./pages/learn/Learn";
import Values from "./pages/values/Values";
import AfterScan from "./pages/qrcode/AfterScan";
import Login from "./pages/login/Login";
import { useState } from "react";
function App() {
  const [loggedin,setLoggedin]=useState(true);
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/qrcode" element={<QRcode />} />
        <Route path="/shedules" element={<Schedules />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/values" element={<Values />} />
        <Route path="/afterscan" element={<AfterScan />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
