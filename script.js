const audio = document.getElementById("audioPlayer");
const message = document.getElementById("message");

// Play audio when user interacts with the page
document.addEventListener("click", () => {
  audio
    .play()
    .then(() => {
      console.log("Audio started playing.");
      message.style.display = "none";
    })
    .catch((error) => {
      console.error("Playback error:", error);
    });
});