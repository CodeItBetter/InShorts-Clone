import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="inshorts-logo">
          <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" 
          alt="inshorts-logo" height="70px" style={{cursor: 'pointer'}} />
          <p>Inshorts clone by Uma Mageswari T T</p>
        </div>
        <hr />
            <p>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </p>  
    </div>
  )
}

export default Footer;