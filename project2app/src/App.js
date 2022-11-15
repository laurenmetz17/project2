
import {React, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './About';
import NavBar from './NavBar';
import EntryForm from './EntryForm';
import Playlist from './Playlist';

function App() {

  const [songList, setSongList] = useState([]);
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/playlist" element={<Playlist songList={songList}/>}/>
        <Route path="/createEntry"element={<EntryForm setSongList={setSongList} songList={songList}/>}/>
        <Route path="/" element={<About />} />
    </Routes>
    </div>
    
  );
}

export default App;
