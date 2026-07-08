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

// const loginForm = document.getElementById("loginForm");
// const usernameCounter = document.getElementById("usernameCounter");

// let counter = 0;
// loginForm.addEventListener("input", (event) => {
//     counter++;
//     usernameCounter.innerText = counter;
//     console.log(event.target.name, event.target.value);
// })

// loginForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // const username = document.getElementById("username").value;
//     const username = document.login_form.username.value;
//     console.log(username);
// })

// window events -> scroll, resize

// DOM -> Document Object Model
// Window -> Browser Window -> BOM -> Browser Object Model

// window.addEventListener("resize", () => {
//     console.log(window.innerWidth, window.innerHeight);
// })


// window.addEventListener("scroll", () => {
//     console.log(window.scrollY, window.scrollX);
// })

// form validation

const registerForm = document.getElementById("register_form");
const error = document.querySelectorAll(".error");

registerForm.addEventListener("input", () => {
    error.forEach(spanTag => {
        spanTag.innerHTML = "";
    })
})

registerForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.register_form.name.value;
    const nameRegex = /^[a-zA-Z\s]{4,20}$/;
    const username = document.register_form.username.value;
    const usernameRegex = /^[a-z][a-z0-9_.]{3,15}$/;
    const phone = document.register_form.phone.value;
    const phoneRegex = /^\d{10}$/;
    const email = document.register_form.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = document.register_form.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,16}$/;
    const confirmPassword = document.register_form.confirm_password.value;

    // if (!name) {
    //    return alert("Please enter your name");
    // }
    if (!name) {
        error[0].innerHTML = "Please enter your name";
        return;
    }
    if (!nameRegex.test(name)) {
        error[0].innerHTML = "Name must be only letters and spaces, between 4 and 20 characters";
        return;
    }
    if (!username) {
        error[1].innerHTML = "Please enter your username";
        return;
    }
    if (!usernameRegex.test(username)) {
        error[1].innerHTML = "Username must be only lowercase letters, numbers, underscores, and dots, between 4 and 16 characters";
        return;
    }
    if(!phone){
        error[2].innerHTML = "Please enter your phone number";
        return;
    }
    if(!phoneRegex.test(phone)){
        error[2].innerHTML = "Phone number must be 10 digits";
        return;
    }
    if(!email){
        error[3].innerHTML = "Please enter your email";
        return;
    }
    if(!emailRegex.test(email)){
        error[3].innerHTML = "Email must be valid";
        return;
    }
    if(!password){
        error[4].innerHTML = "Please enter your password";
        return;
    }
    if(!passwordRegex.test(password)){
        error[4].innerHTML = "Password must be at least 8 characters long, and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
        return;
    }
    if(!confirmPassword){
        error[5].innerHTML = "Please enter your confirm password";
        return;
    }
    if(password !== confirmPassword){
        error[5].innerHTML = "Passwords do not match";
        return;
    }
    const formData = { name, username, phone, email, password, confirmPassword };
    console.log(formData);
    return alert("Registration successful");
})

