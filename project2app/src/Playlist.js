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


    /*function handleDelete(e) {
        console.log(e.target.id);
        const newEntries = entries.filter(entry => e.target.id !== entry.key.toString())
        setEntries(newEntries);

        fetch(`http://localhost:3000/playlist/${e.target.id}`,{method:"DELETE"})
    }
    */

    const entryItems = entries.map(entry => (
        <MemoryCard key={entry.songTitle} entry={entry} />
    ))
    
    //dont need to sort the entries assuming its used like a journal and the entries are in time order 
    /*function sortEntries(entriesToSort) {
        const sorted = [];
        entryItems.forEach(entry => {
            let date = entry.props.id;
        })
    }
    */

    return (
        <div>
            {entryItems}
        </div>
    )

}

export default Playlist;