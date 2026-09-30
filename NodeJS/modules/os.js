// Build in modules / core modules

// const os = require("os");

// const data = os.userInfo();
// console.log(data);

const fs = require("fs");

fs.writeFile("./test.txt", "Hello World!", () => {
    console.log("File written");
});

fs.readFile("./samplsde.txt", { encoding: "utf-8" }, (error, data) => {
    if(error){
        return console.log(error);
    }
    return console.log(data);
});

fs.appendFile("./test2.txt", " This is a new text", () => {
    console.log("File appended");
})

fs.unlink("./test2.txt", () => { 
    console.log("File deleted");
});

fs.rename("./test.txt", "./sample_text_file.txt", () => { 
    console.log("File renamed");
});

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
`;

fs.writeFile("./index.html", html, () => {
    console.log("File written");
})