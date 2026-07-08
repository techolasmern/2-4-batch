// 1. media
// 2. form events

// const natureVideo = document.getElementById("natureVideo");

// natureVideo.addEventListener("play", () => {
//     console.log("video started playing");
// });

// natureVideo.addEventListener("pause", () => {
//     console.log("video paused");
// });
// const toggleBtn = document.getElementById("toggleBtn");

// natureVideo.addEventListener("ended", () => {
//     console.log("video ended");
//     toggleBtn.innerHTML = "Play";
// })


// toggleBtn.addEventListener("click", () => {
//     if (natureVideo.paused) {
//         natureVideo.play();
//         toggleBtn.innerHTML = "Pause";
//     } else {
//         natureVideo.pause();
//         toggleBtn.innerHTML = "Play";
//     }
// })

// Form Events

const loginForm = document.getElementById("loginForm");
const usernameCounter = document.getElementById("usernameCounter");

let counter = 0;
loginForm.addEventListener("input", (event) => {
    counter++;
    usernameCounter.innerText = counter;
    console.log(event.target.name, event.target.value);
})

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // const username = document.getElementById("username").value;
    const username = document.login_form.username.value;
    console.log(username);
})