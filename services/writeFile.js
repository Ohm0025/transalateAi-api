const { writeFileSync, readdirSync, readFileSync } = require("fs");
const wordcount = require("word-count");

let seperate = "---------------------------------------";

const pathDir =
  "/Users/apple/Documents/project-on-git/api project/textMemApi/memory";

function writeNewText(text) {
  const readDir = readdirSync(pathDir);
  let lastTxt = readDir[readDir.length - 1];

  const readWord = readFileSync(pathDir + "/" + lastTxt, {
    encoding: "utf-8",
  });
  const countWord = wordcount(readWord);
  //console.log(countWord);
  if (countWord < 500) {
    let targetPath = pathDir + "/" + lastTxt;
    //console.log(targetPath);
    writeFileSync(targetPath, "\n" + seperate + "\n" + text, {
      encoding: "utf8",
      flag: "a+",
    });
  } else {
    let newIndex = readDir.length + 1;
    let targetpath = pathDir + "/text" + newIndex + ".txt";
    //console.log(targetpath);
    writeFileSync(targetpath, "Note " + newIndex + "\n" + seperate + "\n", {
      encoding: "utf8",
      flag: "a+",
    });
    writeFileSync(targetpath, text, {
      encoding: "utf8",
      flag: "a+",
    });
  }
}

module.exports = writeNewText;
