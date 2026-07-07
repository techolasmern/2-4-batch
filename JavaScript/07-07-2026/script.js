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



