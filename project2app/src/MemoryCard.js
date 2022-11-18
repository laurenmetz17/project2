import React from 'react';

function MemoryCard({entry}) {

    const {songTitle,artist,date, memory, albumCover, audioPreview} = entry;

    //incorporate audio preview
    return(
        <div>
            <card>
                <h4>{`${date}`}</h4>
                <h5>{`${songTitle}  - ${artist}`}</h5>
                <img src={albumCover} alt="album cover"></img>
                <p>{memory}</p>
            </card>
        </div>
    )


}

export default MemoryCard;