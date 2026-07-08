// 1. media
// 2. form events

const natureVideo = document.getElementById("natureVideo");

natureVideo.addEventListener("play", () => {
    console.log("video started playing");
});

natureVideo.addEventListener("pause", () => {
    console.log("video paused");
});
const toggleBtn = document.getElementById("toggleBtn");

natureVideo.addEventListener("ended", () => {
    console.log("video ended");
    toggleBtn.innerHTML = "Play";
})


toggleBtn.addEventListener("click", () => {
    if (natureVideo.paused) {
        natureVideo.play();
        toggleBtn.innerHTML = "Pause";
    } else {
        natureVideo.pause();
        toggleBtn.innerHTML = "Play";
    }
})