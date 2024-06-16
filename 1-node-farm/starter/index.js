const fileModifier = require("fs");

const textIn = fileModifier.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);
