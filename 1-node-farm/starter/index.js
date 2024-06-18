const fileModifier = require("fs");

// const textIn = fileModifier.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `About Avocados --> ${textIn} \n by harsh sachan 💪`;
// fileModifier.writeFileSync("./txt/outputFile.txt", textOut);

// console.log("file written successfully");

// Asynchronus - non blocking way

fileModifier.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  console.log(data1);
  fileModifier.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fileModifier.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fileModifier.writeFile(
        "./txt/final.txt",
        `${data1} \n ${data2} \n ${data3}`,
        "utf-8",
        (err) => {
          console.log("mega file is written");
        }
      );
    });
  });
});

console.log("file work done");
