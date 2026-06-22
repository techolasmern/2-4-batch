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


// Array methods

const array = [10, 20, 30, 40, 50, 60];

// array.push(70, 80, 90);
// array.pop();

// array.unshift(-30, -20, -10, 0);
// array.shift();

console.log(array[2]);
console.log(array.at(3));

console.log(array.length); 

console.log(array.indexOf(50));
console.log(array.includes(310));

console.log(array.slice(0, 2));
console.log(array.slice(-2));
console.log(array.slice(0, -2));

const idx = array.indexOf(60);
array[idx] = 500;

console.log(array);
// console.log(array);

console.log(array.join(" - "));

// splice;

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 0, 30, 40, 50, 60, 70);

console.log(arr);

// number hide -> 9876543210 -> 98******10

const hideNumber = (phone=0) => {
    if (phone == 0) return "Please provider a valid number";
    const toStr = phone.toString();
    const firstDigits = toStr.slice(0, 2);
    const lastDigits = toStr.slice(-2);
    return firstDigits + "*****" + lastDigits;
}

console.log(hideNumber(9876543213));
console.log(hideNumber(6453247658));

// hide email
// john123@gmail.com => joh******@gmail.com

const hideMail = (email = "john123@gmail.com") => {
    if (!email || !email.includes("@")) return "Provide valid email";
    const splitted = email.split("@");
    const username = splitted[0];
    const domain = splitted[1];
    const starAddedUsername = username.slice(0, -4) + "******";
    return starAddedUsername + "@" + domain;
}

console.log(hideMail("aswin123@gmail.com"));
console.log(hideMail("amayatk@yahoo.com"));