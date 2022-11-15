import {React, useState} from 'react';
import MemoryCard from './MemoryCard';

function EntryForm({songList, setSongList}) {

    const [songTitle, setSongTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [memory, setMemory] = useState("");

    function createEntry(event) {
        event.preventDefault();
        setSongTitle(event.target.children[1].value);
        setArtist(event.target.children[3].value);
        setDate(event.target.children[5].value);
        setMemory(memory => memory = event.target.children[7].value);
        //not updating state immediately 
        const entryInfo = [songTitle, artist, date, memory];
        console.log(entryInfo);

        const newEntry = <MemoryCard entryInfo={entryInfo} />

        setSongList([...songList, newEntry]);

    }
    return (
        <form id="entry" onSubmit={createEntry}>
            <h2>Song Title :</h2>
            <input type="text" name="song-title" />
            <h2>Artist :</h2>
            <input type="text" name="song-artist" />
            <h2>Date MM/DD/YYYY :</h2>
            <input type="text" name='date' />
            <h2>Memory :</h2>
            <input type="text" name='memory' />
            <h2></h2>
            <input type="submit" value="submit" />
        </form>
    )

}

export default EntryForm;