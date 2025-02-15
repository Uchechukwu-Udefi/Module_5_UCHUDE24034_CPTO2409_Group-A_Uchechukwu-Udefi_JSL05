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
    { title: "Father and Son", artist: "Cat Stevens", genre: "R&B" },

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock",
    "Mantis": "R&B"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian, displaying the title and artist of each song.
    // Your code here

    return Object.keys(guardians).map((guardian) => {
        const genre = guardians[guardian];
        const playlist = songs.filter((song) => song.genre === genre);
        let playlistString = `<h2>${guardian}'s Playlist:</h2>`;
        playlist.forEach((song) => {
            playlistString += `<div class="song-title">${song.title}</div> by: ${song.artist}<br>`;
        });
        return playlistString;
    });

}

//Object.keys(guardians)

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

// Function to display playlists for each Guardian
function displayPlaylists(guardians, songs) {
    const playlistContainer = document.getElementById("playlists");
    const playlists = generatePlaylist(guardians, songs);
    playlists.forEach((playlist) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");
        playlistDiv.innerHTML = playlist;
        playlistContainer.appendChild(playlistDiv);
    });
}

// Call displayPlaylists 
displayPlaylists(guardians, songs);

