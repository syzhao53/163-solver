/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
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

  const [error, setError] = useState({ message: '' });
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');


  const footerMessage = 'Made by Sylvia';

  const convert = (s) => {
    s = s.trim();

    if (s == 'j' || s == 'J') {
      return 11;
    } else if (s == 'q' || s == 'Q') {
      return 12;
    } else if (s == 'k' || s == 'K') {
      return 13;
    } else if (s == 'a' || s == 'A') {
      return 1;
    } else {
      return parseInt(s);
    }
  }
  const solveForm = (event) => {
    // log.textContent = 'Form Submitted! Time stamp: ${event.timeStamp}';
    event.preventDefault();
    const oneInt = convert(one)
    const twoInt = convert(two);
    const threeInt = convert(three);
    const fourInt = convert(four);
    const fiveInt = convert(five);
    const sixInt = convert(six);

    const total = oneInt + twoInt;
    setError({ message: 'Please enter your login credentials' + total });
  }
  
  // const form = document.getElementById('solver-form');
  // const log = document.getElementById('log');
  // form.addEventListener('submit', solveForm);

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

          <form className="input-form" id="solver-form"  onSubmit={solveForm}>
            <div className="big-header">
              163 SOLVER
            </div>
            <div className="instr">
              Input 1-13 or J, Q, K, A
            </div>
            <div className="input-row">
              <input className="input-in" type="text" onChange={event => setOne(event.target.value)}></input>
              <input className="input-in" type="text" onChange={event => setTwo(event.target.value)}></input>
              <input className="input-r" type="text" onChange={event => setThree(event.target.value)}></input>
            </div>
            <div className="input-row-b">
              <input className="input-in" type="text" onChange={event => setFour(event.target.value)}></input>
              <input className="input-in" type="text" onChange={event => setFive(event.target.value)}></input>
              <input className="input-r" type="text" onChange={event => setSix(event.target.value)}></input>
            </div>
            <div id="error">{error.message}</div>
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
