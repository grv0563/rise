import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mission from "./pages/company/mission/Mission";
import Learn from "./pages/learn/Learn";
import Values from "./pages/company/values/Values"
import Vision from "./pages/company/vision/Vision"
import Aboutus from "./pages/company/about/Aboutus"
import RoadMap from "./pages/company/roadmap/RoadMap"
import Signup from "./pages/auth/signup/Signup";
import Home from "./pages/home/Home";
import Schedules from "./pages/schedules/Schedules";
import AfterScan from "./pages/qrcode/AfterScan";
import Login from "./pages/auth/login/Login";


import Success from "./pages/auth/signup/Success";
import Dashboard from "./pages/dashboards/providerdashbaord/Dashboard";
import Profile from "./pages/auth/profile/Profile";
import SignOut from "./pages/auth/signout/SignOut";
import PatientDash from "./pages/dashboards/patientDashboard/PatientDash";
import InsurnaceDash from "./pages/dashboards/insurnaceDashboard/InsurnaceDash";
import TestCenterDash from "./pages/dashboards/Test_Center_Dashboard/TestCenterDash";
import Scan from "./pages/qrcode/Scan";
import Prescribe from "./pages/qrcode/Prescribe";
import SearchBar from "./pages/dashboards/componenets/SearchBar";
import ResearchDashboard from "./pages/dashboards/researchDashboard/ResearchDashboard";
import PharmaDash from "./pages/dashboards/pharmaDashboard/PharmaDash";
import PatientQRCode from "./pages/dashboards/patientDashboard/PatientQRCode";
import DocterQRCode from "./pages/dashboards/providerdashbaord/DocterQRCode";
import DocterProfile from "./pages/auth/profile/DocterProfile";
import InsurerQRCode from "./pages/dashboards/insurnaceDashboard/InsurerQRCode";
import PharmaQRCode from "./pages/dashboards/pharmaDashboard/PharmaQRCode";
import RsearchQRCode from "./pages/dashboards/researchDashboard/RsearchQRCode";
import TestCenterQRCode from "./pages/dashboards/Test_Center_Dashboard/TestCenterQRCode";
import InsurnaceProfile from "./pages/dashboards/insurnaceDashboard/InsurnaceProfile";
import PahrmaProfile from "./pages/dashboards/pharmaDashboard/PahrmaProfile";
import ResearchProfile from "./pages/dashboards/researchDashboard/ResearchProfile";
import TestCenterProfile from "./pages/dashboards/Test_Center_Dashboard/TestCenterProfile";

function App() {
  const [loggedin, setLoggedin] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patientqrcode" element={<PatientQRCode />} />
          <Route path="/docterqrcode" element={<DocterQRCode />} />
          
          <Route path="/insurerqrcode" element={<InsurerQRCode />} />
          <Route path="/pharmaqrcode" element={<PharmaQRCode />} />
          <Route path="/testqrcode" element={<TestCenterQRCode />} />
          <Route path="/researchqrcode" element={<RsearchQRCode />} />
          <Route path="/qrscan" element={<Scan />} />
          <Route path="/shedules" element={<Schedules />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/values" element={<Values />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/roadmap" element={<RoadMap />} />
          #----
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          #Profiles
          <Route path="/afterscan" element={<AfterScan />} />
          <Route path="/docterprofile" element={<DocterProfile />} />
          <Route path="/insuranceprofile" element={<InsurnaceProfile />} />
          <Route path="/pharmaprofile" element={<PahrmaProfile />} />
          <Route path="/researchprofile" element={<ResearchProfile />} />
          <Route path="/testcenterprofile" element={<TestCenterProfile />} />


          <Route path="/qrscan" element={<Scan />} />
          <Route path="/prescribe" element={<Prescribe />} />
          <Route path="/afterscan" element={<AfterScan />} />
          <Route path="/shedules" element={<Schedules />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signout" element={<SignOut />} />
          # Dashboards
          <Route path="/pharmaDashboard" element={<PharmaDash />} />
          <Route path="/patientDashboard" element={<PatientDash />} />
          <Route path="/insurnaceDashboard" element={<InsurnaceDash />} />
          <Route path="/testcenterDashboard" element={<TestCenterDash />} />
          <Route path="/researchdashboard" element={<ResearchDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
