// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian, displaying the title and artist of each song.
    // Your code here

    return Object.keys(guardians).map((guardian) => {
        const genre = guardians[guardian];
        const playlist = songs.filter((song) => song.genre === genre);

        const playlistString = playlist.map((song) => `<div class="song-title">${song.title}</div> by: ${song.artist}`)
        .join("");
        return `${guardian}'s Playlist:<br>${playlistString}`;
    });
    
   /* return Object.keys(guardians).map((guardian) => {
        const playlist = songs.filter((song) => song.genre === guardians[guardian]);
        let playlistString = `${guardian}'s Playlist:<br>`;

        playlist.forEach((song) => {
            let titleString = `<div class="song-title">${song.title}</div>`;
            playlistString += `${titleString} by: ${song.artist}<br>`;
        });
        return playlistString;
    });*/
}

console.log(generatePlaylist(guardians, songs));
//Object.keys(guardians)

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

function displayPlaylists(guardians, songs) {
    const playlistContainer = document.getElementById("playlists");
    const playlists = generatePlaylist(guardians, songs);
    console.log(playlists);
    playlists.forEach((playlist) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");
        playlistDiv.innerHTML = playlist;
        playlistContainer.appendChild(playlistDiv);
    });
}
displayPlaylists(guardians, songs);
