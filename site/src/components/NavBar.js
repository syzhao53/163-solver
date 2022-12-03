/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import Hamburger from '../assets/hamburger.svg';
import Close from '../assets/close.svg';
import Leaf from '../assets/leaf.png';
import LeafSVG from '../assets/leaf.svg';

function NavBar({ currPage }) {
  const [menuToggled, setMenuToggled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuToggled(!menuToggled);
  };

  const sidebar = (
    <div className="sidebar" style={{ display: menuToggled ? 'flex' : 'none' }}>
      <svg id="sidebar-close-icon" onClick={async () => {toggleMenu();}} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292892C1.31658 -0.0976315 0.683416 -0.0976314 0.292891 0.292893C-0.0976328 0.683416 -0.0976328 1.31658 0.292892 1.70711L9.58579 11L0.292893 20.2929C-0.0976311 20.6834 -0.0976311 21.3166 0.292893 21.7071C0.683418 22.0976 1.31658 22.0976 1.70711 21.7071L11 12.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L12.4142 11L21.7071 1.70711C22.0976 1.31658 22.0976 0.683416 21.7071 0.292893C21.3166 -0.0976313 20.6834 -0.0976312 20.2929 0.292893L11 9.58578L1.70711 0.292892Z" fill="#787878"/>
      </svg>
      <button
        type="button"
        className={currPage === 'work' ? 'sidebar-button-bold' : 'sidebar-button'}
        onClick={async () => {
          navigate('/');
        }}
      >
        WORK
      </button>
      <button
          type="button"
          className={currPage === 'resume' ? 'sidebar-button-bold' : 'sidebar-button'}
          onClick={async () => {
            navigate('/resume');
          }}
        >
          RESUME
        </button>
        <button
          type="button"
          className={currPage === 'about' ? 'sidebar-button-bold' : 'sidebar-button'}
          onClick={async () => {
            navigate('/about');
          }}
        >
          ABOUT
        </button>
    </div>
  );

  return (
    <div className="NavBar">
      <div className="mobile-nav">
        <div className="mobile-nav-row">
          <img id="mobile-leaf-icon" src={LeafSVG} alt="leaf icon" onClick={async () => {navigate('/');}}/>
          <img id="hamburger" src={Hamburger} style={{ display: menuToggled ? 'none' : 'inline' }} alt="hamburger menu" onClick={async () => toggleMenu()} />
        </div>
      </div>
      {sidebar}
      <div className="nav-row">
        <div id="logo">
          <img id="leaf-icon" src={Leaf} alt="leaf icon" onClick={async () => {navigate('/');}}/>
          <div className="logo-text"  onClick={async () => {navigate('/');}}>
            SZ
          </div>
        </div>
        <button
          type="button"
          className={currPage === 'about' ? 'nav-button-bold' : 'nav-button'}
          onClick={async () => {
            navigate('/about');
          }}
        >
          ABOUT
        </button>
        <button
          type="button"
          className={currPage === 'resume' ? 'nav-button-bold' : 'nav-button'}
          onClick={async () => {
            navigate('/resume');
          }}
        >
          RESUME
        </button>
        <button
          type="button"
          className={currPage === 'work' ? 'nav-button-bold' : 'nav-button'}
          onClick={async () => {
            navigate('/');
          }}
        >
          WORK
        </button>
      </div>
    </div>
    // <div className="NavBar">
    //   <button
    //     type="button"
    //     className={currPage === 'work' ? 'nav-button-bold' : 'nav-button'}
    //     onClick={async () => {
    //       navigate('/');
    //     }}
    //   >
    //     WORK
    //   </button>
    //   <button
    //     type="button"
    //     className={currPage === 'project' ? 'nav-button-bold' : 'nav-button'}
    //     onClick={async () => {
    //       navigate('/project');
    //     }}
    //   >
    //     RESUME
    //   </button>
    //   <button
    //     type="button"
    //     className="nav-button"
    //     onClick={async () => {
    //       navigate('/project');
    //     }}
    //   >
    //     CONTACT
    //   </button>
    // </div>
  );
}

export default NavBar;
