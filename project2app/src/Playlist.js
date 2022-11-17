import React from 'react';
import MemoryCard from './MemoryCard';


function Playlist({entries}) {

    const entryItems = entries.map(entry => (
        <MemoryCard entry={entry}/>
    ))

    return (
        <div>
            {entryItems}
        </div>
    )

}

export default Playlist;