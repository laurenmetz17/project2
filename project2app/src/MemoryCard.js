import React from 'react';

function MemoryCard({entry, handleDelete}) {

    const {songTitle,artist,date, memory, albumCover, id ,audioPreview} = entry;
    console.log(id);

    //incorporate audio preview

    return(
        <div className="card">
            <img src={albumCover} alt="album cover"></img>
            <div className="container">
                <h4>{`${date}`}</h4>
                <h5>{`${songTitle}  - ${artist}`}</h5>
                <p>{memory}</p>
                <button id={id} onClick={handleDelete}>Delete Entry</button>
            </div>
        </div>
    )


}

export default MemoryCard;