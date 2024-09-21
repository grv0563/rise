import React from 'react'
import './PharmaDash.css'
import Footer from '../../../components/Footer'
import LoggedIN_navBar from '../../../components/LoggedIN_navBar'
function PharmaDash() {
  return (
    <div className='pharma-container'>
    <div className='pharma-header'>
      <LoggedIN_navBar userName="Z Pharma Pvt Ltd" urlName="/pharmaqrcode" />
    </div>
    <div className='pharma-mainarea'>
    <h1>Pharmacy or Life Science Dashboard</h1>
    </div>
    <div className='pharma-footer'>
        <Footer/>
    </div>
  
</div>
  )
}

export default PharmaDash
