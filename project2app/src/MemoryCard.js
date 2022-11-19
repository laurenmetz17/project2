import React from 'react';

function MemoryCard({entry}) {

    const {songTitle,artist,date, memory, albumCover, audioPreview} = entry;
    console.log(entry);

    //incorporate audio preview
    return(
        <div class="card">
            <img src={albumCover} alt="album cover"></img>
            <div class="container">
                <h4>{`${date}`}</h4>
                <h5>{`${songTitle}  - ${artist}`}</h5>
                <p>{memory}</p>
            </div>
        </div>
    )


}

export default MemoryCard;