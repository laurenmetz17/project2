
import {React, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './About';
import NavBar from './NavBar';
import EntryForm from './EntryForm';
import Playlist from './Playlist';

function App() {

  const [entries, setEntries] = useState([]);
  //entries is an array of objects 
  return (
    <div className="App">
      <header style={{background: "LightSeaGreen"}}>Memory Playlist</header>
      <NavBar/>
      <Routes>
        <Route path="/playlist" element={<Playlist  setEntries={setEntries} entries={entries}/>}/>
        <Route path="/createEntry"element={<EntryForm setEntries={setEntries} entries={entries}/>}/>
        <Route path="/" element={<About />} />
    </Routes>
    </div>
    
  );
}

export default App;
