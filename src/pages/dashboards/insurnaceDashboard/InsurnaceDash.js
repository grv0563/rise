import React from 'react';
import "./InsurnaceDash.css"
import Footer from '../../../components/Footer';
import NavigationBar from '../../../components/NavigationBar';

function InsurnaceDash() {
  return (
    <div className='isurnace-coantiner'>
        <div className='isnurance-header'>
        <NavigationBar userName="Y Health Insurer Pvt Ltd" />
        </div>
        <div className='insurnace-mainarea'>
        <h1>Insurnace company Dashboard</h1>
        </div>
        <div className='insurnace-footer'>
            <Footer/>
        </div>
      
    </div>
  )
}

export default InsurnaceDash
