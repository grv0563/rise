import React from 'react'
import "./TestCenterDash.css"
import Footer from '../../../components/Footer';
import NavigationBar from '../../../components/NavigationBar';
import LoggedIN_navBar from '../../../components/LoggedIN_navBar';
function TestCenterDash() {
  return (
    <div className='testingcenter-container'>
    <div className='testingcenter-header'>
        <LoggedIN_navBar userName="XYZ Testing Center"  urlName="/testqrcode"/>
    </div>
    <div className='testingcenter-mainarea'>
    <h1>Testing LAB Dashboard</h1>
    </div>
    <div className='testingcenter-footer'>
        <Footer/>
    </div>
  
</div>
  )
}

export default TestCenterDash;
