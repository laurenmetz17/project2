import React from 'react';
import MemoryCard from './MemoryCard';


function Playlist({entries}) {

    //make initial fetch to the json server to put the entries on this page

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