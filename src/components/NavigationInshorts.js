import './NavigationInshorts.css';
import HambugerDrawer from './HambugerDrawer';
import React from 'react';

const NavigationInshorts = ({setCategory}) =>{
    return(
        <div className="navbar">
            <div className="icon"><HambugerDrawer setCategory={setCategory} /></div>
            <div className="logo">
                <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
                alt="inshorts-logo" height="70px" style={{cursor: 'pointer'}} />
            </div>
        </div>
    )
}

export default NavigationInshorts;