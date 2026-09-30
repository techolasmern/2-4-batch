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