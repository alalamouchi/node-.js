const fs = require("fs");
const path = require("path");

const newpath = path.resolve("content", "welcome.txt");
const newfile = fs.writeFileSync(newpath, "Hello Node");

console.log(welcome);
