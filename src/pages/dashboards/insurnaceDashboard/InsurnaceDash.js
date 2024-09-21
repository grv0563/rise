import React from 'react';
import "./InsurnaceDash.css"
import Footer from '../../../components/Footer';
import LoggedIN_navBar from '../../../components/LoggedIN_navBar';

function InsurnaceDash() {
  return (
    <div className='isurnace-coantiner'>
        <div className='isnurance-header'>
        <LoggedIN_navBar userName="Z insurance pvt Ltd" urlName="/insurerqrcode" />
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
