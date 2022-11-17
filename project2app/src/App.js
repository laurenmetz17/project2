
import {React, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './About';
import NavBar from './NavBar';
import EntryForm from './EntryForm';
import Playlist from './Playlist';

function App() {

  const [entries, setEntries] = useState([]);
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/playlist" element={<Playlist entries={entries}/>}/>
        <Route path="/createEntry"element={<EntryForm setEntries={setEntries} entries={entries}/>}/>
        <Route path="/" element={<About />} />
    </Routes>
    </div>
    
  );
}

export default App;
