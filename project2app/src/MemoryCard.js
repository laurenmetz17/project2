import React from 'react';

function MemoryCard({entry, handleDelete}) {

    const {songTitle,artist,date, memory, albumCover, key ,audioPreview} = entry;

    //incorporate audio preview and delete

    return(
        <div className="card">
            <img src={albumCover} alt="album cover"></img>
            <div className="container">
                <h4>{`${date}`}</h4>
                <h5>{`${songTitle.toUpperCase()}  - ${artist.toUpperCase()}`}</h5>
                <p>{memory}</p>
                {/*<a href={audioPreview}>ITunes Audio Preview</a>
                <button id={key} onClick={handleDelete}>Delete Entry</button>*/}
            </div>
        </div>
    )


}

export default MemoryCard;