import React from 'react';

function MemoryCard({entry, handleDelete}) {

    const {songTitle,artist,date, memory, albumCover, key ,audioPreview} = entry;
    console.log(key);

    //incorporate audio preview

    return(
        <div className="card">
            <img src={albumCover} alt="album cover"></img>
            <div className="container">
                <h4>{`${date}`}</h4>
                <h5>{`${songTitle}  - ${artist}`}</h5>
                <p>{memory}</p>
                {/*<a href={audioPreview}>ITunes Audio Preview</a>
                <button id={key} onClick={handleDelete}>Delete Entry</button>*/}
            </div>
        </div>
    )


}

export default MemoryCard;