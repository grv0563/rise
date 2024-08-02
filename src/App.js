import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import QRcode from "./pages/qrcode/QRcode";
import Schedules from "./pages/schedules/Schedules";
import Scan from "./pages/qrcode/Scan";
import Mission from "./pages/mission/Mission";
import Blog from "./pages/blog/Blog";
import Values from "./pages/values/Values";
import AfterScan from "./pages/qrcode/AfterScan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/qrcode" element={<QRcode />} />
        <Route path="/shedules" element={<Schedules />} />
        <Route path="/qrscan" element={<Scan />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/values" element={<Values />} />
        <Route path="/afterscan" element={<AfterScan />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
