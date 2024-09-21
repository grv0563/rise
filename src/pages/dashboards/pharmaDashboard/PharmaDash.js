import React from 'react'
import './PharmaDash.css'
import Footer from '../../../components/Footer'
import NavigationBar from '../../../components/NavigationBar'
function PharmaDash() {
  return (
    <div className='pharma-container'>
    <div className='pharma-header'>
      <NavigationBar userName="Z pharmaceutics Ltd" />
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
