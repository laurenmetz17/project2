import React, { useEffect } from 'react';
import MemoryCard from './MemoryCard';


function Playlist({setEntries,entries}) {

    useEffect(() => {
        fetch("http://localhost:3000/playlist").then(resp => resp.json())
        .then(data => {
            setEntries(data)
            console.log(entries)
        })
    },[])
    console.log(entries);
    //make initial fetch to the json server to put the entries on this page
    //render in date order

    const entryItems = entries.map(entry => (
        <MemoryCard id={entry.songTitle} entry={entry}/>
    ))

    return (
        <div>
            {entryItems}
        </div>
    )

}

export default Playlist;