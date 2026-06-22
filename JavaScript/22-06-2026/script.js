// String and array

// String -> Collection of char.
// Array -> Collection of element.

// String Methods

const str = "This is a string"; // index -> position
// ["This", "is", "a", "string"]
// Amal Krishnan

console.log(str[4]);
console.log(str.at(1)); // get char. using index.
console.log(str.charAt(4)); // "

console.log(str.length); // property

console.log(str.indexOf("string")); // get start index using char or string / -1
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes("string")); // check the string/word/char is included

console.log(str.startsWith("This"));
console.log(str.endsWith("ng"));

console.log(str.slice(0, 7)); // to slice ( chars from 0 - 6)
console.log(str.slice(-6)); // to slice ( last 6 chars )
console.log(str.slice(0, -6)); // to slice ( remove last 2 chars )
console.log(str.split(" ")) // convert string to array.
console.log(str.replace("i", "0"));
console.log(str.replaceAll("i", "0"));

const txt = "       Amal Kv       "

console.log(txt.trim()); // remove white spaces
console.log(txt.trimStart()); // remove white spaces (start)
console.log(txt.trimEnd()); // remove white spaces (end)


