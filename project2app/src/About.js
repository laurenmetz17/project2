import React from 'react';

function About() {

    console.log(window.location.href);
    return (
        <div id="about">
            <h1>Memory Playlist</h1>
            <h2>Why</h2>
            <p>Studies have shown that music not only helps us retrieve memories but aids in making new ones. 
               By creating memory playlists, you can unlock endless storage of the special memories that you
               associate with a song. This website is designed to be used as a music journal, where you can record
               your memories as an entry associated with a song. 
            </p>
            <h2>How To</h2>
            <p>1. Using the naviagation bar at the top of the page you can click on the entry form to record a memory <br></br>
               2. Input the details about the song of your choosing, the date, and a description of the memory associated with it <br></br>
               3. While the form will handle capitalization be careful not to leave extra spaces or characters in your song title and artist entry <br></br>
               4. Date should be entered in MM/DD/YYY form <br></br>
               5. Submit the entry to save it to your memory playlist <br></br>
               6. In the Playlist tab you can then look through the song memories that you've added to your playlist in chronological order.
            </p>

        </div>
    )
}

export default About;