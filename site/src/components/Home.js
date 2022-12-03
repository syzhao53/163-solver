/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/163-illus.png'
import Arrow from '../assets/arrow.svg';
import Heart from '../assets/heart.svg';
import NavBar from './NavBar';
import Footer from './Footer';
import Leaf from '../assets/leaf.png';
import LeafSVG from '../assets/leaf.svg';

function Home({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  // const goToProject = (name) => {
  //   if (name === 'meetup') {
  //     navigate('/meetup');
  //   } else if (name === 'pennintouch') {
  //     navigate('/pennintouch');
  //   } else if (name === 'speechconnect') {
  //     navigate('/speechconnect');
  //   } else if (name === 'logitech') {
  //     navigate('/logitech');
  //   } else if (name === 'chapter') {
  //     navigate('/chapter');
  //   } else if (name === 'illustrations') {
  //     navigate('/illustrations');
  //   }
  // };

  const footerMessage = 'Made by Sylvia';

  useEffect(() => {
    setCurrPage('work');
    window.scrollTo(0, 0);
    document.title = '163';
  }, []);

  return (
    <div className="Home">
      {/* <NavBar currPage={currPage} /> */}

      <div className="new-landing">
        {/* <div className="paragraph">
          Input 1-13 or J, Q, K, A
        </div> */}
        <div className="input-flex">
        <img id="illus" src={illustration} alt="landing illustration" />

          <form className="input-form">
            <div className="big-header">
              163 SOLVER
            </div>
            <div className="instr">
              Input 1-13 or J, Q, K, A
            </div>
            <div className="input-row">
              <input className="input-in" type="text"></input>
              <input className="input-in" type="text"></input>
              <input className="input-r" type="text"></input>
            </div>
            <div className="input-row-b">
              <input className="input-in" type="text"></input>
              <input className="input-in" type="text"></input>
              <input className="input-r" type="text"></input>
            </div>
            <div className="submit-btn">
              <input type="submit" id="download" value="SOLVE"></input>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
