// DOM => DOM (Document Object Model) in JavaScript is a programming interface
// that represents an HTML document as a tree of objects. It allows
// JavaScript to access, modify, add, or delete HTML elements and CSS styles
// dynamically.

// const obj = { name: "Techolas", age: 25, city: "New York" };

// obj.city;
// obj.name;

// root obj -> document

// properties, methods

console.log(document.title);
console.log(document.body);
console.log(document.head)

// methods

document.writeln("<b>Hello World!</b>");

// getElementById() -> returns the element with the specified id.

const element = document.getElementById("container");
console.log(element.innerHTML);

// element.innerText = "<b>Changed Text</b>";
element.innerHTML = "<b>Changed Text</b>";
const eStyle = element.style;
eStyle.color = "red";
eStyle.backgroundColor = "#222222";
eStyle.padding = "40px";
eStyle.textAlign = "center";

// getElementsByClassName -> returns the collection of elements with the specified class.

const elements = document.getElementsByClassName("demo");
console.log(elements);

const elem = elements[0];

// console.log(elem.innerText);

elem.innerHTML = "Hello"

const elStyle = elem.style;
elStyle.color = "red";
elStyle.backgroundColor = "#222222";
elStyle.padding = "40px";
elStyle.textAlign = "center";

// getElementsByTagName

const elemt = document.getElementsByTagName("div");
console.log(elemt);

// same as className

// querySelector();

const qElem = document.querySelector("#container");
console.log(qElem);
// same as getElementById

const qElements = document.querySelectorAll(".demo");
console.log(qElements);
// same as getElementsByClassName