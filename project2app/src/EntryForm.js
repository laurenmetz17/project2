import {React} from 'react';


function EntryForm({entries, setEntries}) {

    let entryInfo = {};

    function createEntry(event) {
        event.preventDefault();
        const songTitle = event.target.children[1].value;
        const artist = event.target.children[3].value;
        const date = event.target.children[5].value;
        const memory = event.target.children[7].value;

        event.target.children[1].value = "";
        event.target.children[3].value = "";
        event.target.children[5].value = "";
        event.target.children[7].value = "";


        // could include a memory image as well 
        console.log(entries)

        entryInfo.songTitle = songTitle;
        entryInfo.artist = artist;
        entryInfo.date = date;
        entryInfo.memory = memory;
        //console.log(entries.length);
        //entryInfo.key = entries.length + 1;


        fetch(`https://itunes.apple.com/search?media=music&entity=song&term=${songTitle}`).then(resp => resp.json())
        .then(data => {
            console.log(data.results);

            const songTarget = data.results.filter(song => song.artistName.toLowerCase() === artist.toLowerCase());
            console.log(songTarget);
            //this is sensitive to spaces in the song title and artist 
            //of the song is not within the first 50 entries also doesnt work 
            entryInfo.albumCover = songTarget[0].artworkUrl100;
            entryInfo.audioPreview = songTarget[0].previewUrl;

            fetch('http://localhost:3000/playlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(entryInfo),
            }).then(resp => resp.json()).then(() => {
                console.log(entryInfo)
                setEntries([...entries, entryInfo]);
            });
        })

    }
    


    return (
        <form id="entry" onSubmit={createEntry} >
            <h2>Song Title :</h2>
            <input type="text" name="song-title" />
            <h2>Artist :</h2>
            <input type="text" name="song-artist" />
            <h2>Date MM/DD/YYYY :</h2>
            <input type="text" name='date' />
            <h2>Memory :</h2>
            <input type="text" name='memory' />
            <h2>""</h2>
            <input type="submit" value="Submit"  />
        </form>
    )

}

export default EntryForm;