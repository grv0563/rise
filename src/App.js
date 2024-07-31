import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile'
import QRcode from './pages/qrcode/QRcode';
import Schedules from './pages/schedules/Schedules';
import Scan from './pages/qrcode/Scan';
import Mission from './pages/mission/Mission';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/qrcode' element={<QRcode/>}/>
      <Route path='/shedules' element={<Schedules/>}/>
      <Route path='/qrscan' element={<Scan/>}/>
      <Route path='/mission' element={<Mission/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
