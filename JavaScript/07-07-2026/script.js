// events => Actions that happen in the browser.

// addEventListener() => Adds an event listener to the specified element.

// click event;

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Click Event Occurred");
});

// doubleclick event;
btn.addEventListener("dblclick", () => {
    console.log("DoubleClick Event Occurred");
});

btn.addEventListener("drag", () => {
    console.log("Drag Event Occurred");
})

// mouseover event;
const container = document.getElementById("container");
container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "green";
    console.log("MouseOver Event Occurred");
})

// mouseleave event;
container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "red";
    console.log("MouseLeave Event Occurred");
})

// mousemove event;
// document.addEventListener("mousemove", (event) => {
//     console.log("MouseMove Event Occurred", event.clientX, event.clientY);
// })

// keydown event;
document.addEventListener("keydown", (event) => {
    console.log("KeyDown Event Occurred", event);
})


// cursor follower;

const cursorFollower = document.getElementById("cursor_follower");

document.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
    const x = e.clientX;
    const y = e.clientY;
    cursorFollower.style.left = x + "px";
    cursorFollower.style.top = y + "px";
})

// contextmenu event;
const contextMenu = document.getElementById("contextMenu");
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    contextMenu.style.display = "flex";
    const x = event.clientX;
    const y = event.clientY;
    contextMenu.style.left = x + "px";
    contextMenu.style.top = y + "px";
})
contextMenu.addEventListener("click", () => {
    contextMenu.style.display = "none";
})


