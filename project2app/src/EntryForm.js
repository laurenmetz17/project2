import {React} from 'react';


function EntryForm({entries, setEntries}) {

    let entryInfo = {};

    function createEntry(event) {
        event.preventDefault();
        const songTitle = event.target.children[1].value;
        const artist =event.target.children[3].value;
        const date = event.target.children[5].value;
        const memory = event.target.children[7].value;

        entryInfo.songTitle = songTitle;
        entryInfo.artist = artist;
        entryInfo.date = date;
        entryInfo.memory = memory;

        console.log(entryInfo);

        fetch(`https://itunes.apple.com/search?media=music&entity=song&term=${songTitle}`).then(resp => resp.json())
        .then(data => {
            console.log(data.results);
        })

        setEntries([...entries, entryInfo]);
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