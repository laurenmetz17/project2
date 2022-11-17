import React from 'react';

function MemoryCard({entry}) {

    const {songTitle,artist,date, memory} = entry;
    return(
        <div>
            <card>
                <h4>{`${date}`}</h4>
                <h5>{`${songTitle}  - ${artist}`}</h5>
                <img alt="album cover"></img>
                <p>{memory}</p>
            </card>
        </div>
    )


}

export default MemoryCard;