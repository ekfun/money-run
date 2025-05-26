document.addEventListener('DOMContentLoaded', function() {
    const volumeUpBtn = document.getElementById('volumeUpBtn');
    const song = document.getElementById('song');
    
    // Button click handler
    volumeUpBtn.addEventListener('click', function() {
        // Play the song
        song.play()
            .then(() => console.log("Song is playing"))
            .catch(error => console.error("Playback failed:", error));
        
        // Increase volume (optional)
        if (song.volume < 1) {
            song.volume = Math.min(song.volume + 0.1, 1);
        }
    });
    
    // Optional: Handle keyboard volume up key (typically F8 or media keys)
    document.addEventListener('keydown', function(event) {
        if (event.key === "AudioVolumeUp" || event.keyCode === 175) {
            event.preventDefault();
            song.play();
            if (song.volume < 1) {
                song.volume = Math.min(song.volume + 0.1, 1);
            }
        }
    });
});
