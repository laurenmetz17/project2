import React from 'react';

function MemoryCard({entryInfo}) {

    const [songTitle,artist,date, memory] = entryInfo;
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