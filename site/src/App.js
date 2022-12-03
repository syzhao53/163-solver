/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import './assets/App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
// import Meetup from './components/Meetup';
// import PennInTouch from './components/PennInTouch';
// import SpeechConnect from './components/SpeechConnect';
// import Logitech from './components/Logitech';
// import Chapter from './components/Chapter';
// import Resume from './components/Resume';
// import About from './components/About';
// import Illustrations from './components/Illustrations';

function App() {
  const [currPage, setCurrPage] = useState('home');

  // const [title, setTitle] = useState("Sylvia Zhao");
  
  // useEffect(() => {
  //   // This will run when the page first loads and whenever the title changes
  //   document.title = title;
  // }, [title]);

  return (
    <div className="App">
      {/* <Scroll> */}
        <Routes>
          <Route exact path="/" element={<Home currPage={currPage} setCurrPage={setCurrPage} />} />
          {/* <Route exact path="/resume" element={<Resume currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/about" element={<About currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/meetup" element={<Meetup currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/pennintouch" element={<PennInTouch currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/speechconnect" element={<SpeechConnect currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/logitech" element={<Logitech currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/chapter" element={<Chapter currPage={currPage} setCurrPage={setCurrPage} />} />
          <Route exact path="/illustrations" element={<Illustrations currPage={currPage} setCurrPage={setCurrPage} />} /> */}
        </Routes>
      {/* </Scroll> */}
    </div>
  );
}

export default App;
