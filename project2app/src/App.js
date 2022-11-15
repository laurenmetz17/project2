import logo from './logo.svg';
import {React, useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './About';
import NavBar from './NavBar';
import EntryForm from './EntryForm';
import Playlist from './Playlist';

function App() {

  const [songList, setSongList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar/>
      <Routes>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/createEntry"element={<EntryForm setSongList={setSongList} songList={songList}/>}/>
        <Route path="/" element={<About />} />
    </Routes>
    </div>
    
  );
}

export default App;
