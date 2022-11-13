import {React, useState} from 'react';

function EntryForm() {

    return (
        <form id="entry">
            <label>
                Song Title : 
                <input type="text" name="song-title" />
            </label>
            <label>
                Artist :
                <input type="text" name="song-artist" />
            </label>
            <label>
                Date MM/DD/YYYY : 
                <input type="text" name='date' />
            </label>
            <label>
                Memory :
                <input type="text" name='memory' />
            </label>
            <input type="submit" value="submit" />
        </form>
    )

}

export default EntryForm;