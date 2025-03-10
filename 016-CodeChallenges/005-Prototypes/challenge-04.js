// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
  // Initialize songs property
  this.songs = [];
}

// Define addSong method on Playlist's prototype
if (!Playlist.prototype.addSong) {
  Playlist.prototype.addSong = function (song) {
    this.songs.push(song);
  };
}
