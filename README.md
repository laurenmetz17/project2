# Memory PLaylist

## Overview
This webpage allows you to store your memories that you associate with a song in a journal like format. The entry form takes information about your memory and after submission appends it to your very own memory playlist. Information from your entry is used to fetch the album cover of the song you chose from the ITunes API. The user can navigate between an about, entryForm, and playlist page using the navigation bar at the top of the page.

## Usage 
1. Using the naviagation bar at the top of the page you can click on the entry form to record a memory
2. Input the details about the song of your choosing, the date, and a description of the memory associated with it
3. While the form will handle capitalization be careful not to leave extra spaces or characters in your song title and artist entry
4. Date should be entered in MM/DD/YYY form
5. Submit the entry to save it to your memory playlist
6. In the Playlist tab you can then look through the song memories that you've added to your playlist in chronological order.

## Sources

- All album data was pulled from the iTunes Search API (https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1). Note that this API is limited to approximately 20 calls per minute.

## Created by Lauren Metz