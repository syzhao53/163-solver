/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Heart from '../assets/heart.svg';
import '../assets/index.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-wrap">
        <div className="footer-row">
          {/* <div className="footer-text">syzhao@sas.upenn.edu</div> */}
        </div>
        <div id="made-with-love" className="footer-row">
          <div className="footer-text">Made by Sylvia &middot; 2022</div>
          {/* <img id="heart" src={Heart} alt="heart svg" /> */}
          {/* <div className="footer-text">by Sylvia</div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
