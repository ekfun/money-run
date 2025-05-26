document.addEventListener('DOMContentLoaded', function() {
    const volumeText = document.getElementById('volumeText');
    const song = document.getElementById('song');
    
    // Click handler for the text
    volumeText.addEventListener('click', function() {
        // Play the song if not playing
        if (song.paused) {
            song.play()
                .then(() => {
                    console.log("Song is playing");
                    volumeText.textContent = "🔊 Game is starting...";
                    // You can add your game start logic here
                })
                .catch(error => {
                    console.error("Playback failed:", error);
                    volumeText.textContent = "🔊 Error: Click to try again";
                });
        } else {
            // If already playing, just increase volume
            song.volume = Math.min(song.volume + 0.1, 1);
        }
    });
    
    // Optional: Handle keyboard volume up key
    document.addEventListener('keydown', function(event) {
        if (event.key === "AudioVolumeUp" || event.keyCode === 175) {
            event.preventDefault();
            if (song.paused) {
                song.play();
                volumeText.textContent = "🔊 Game is starting...";
            } else {
                song.volume = Math.min(song.volume + 0.1, 1);
            }
        }
    });
});
