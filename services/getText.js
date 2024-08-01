const { readdirSync, readFileSync } = require("fs");

const path =
  "/Users/apple/Documents/project-on-git/api project/textMemApi/memory";

function getListText() {
  const listFile = readdirSync(path);
  return listFile;
}

function getText(index) {
  const listFile = readdirSync(path);
  const targetFile = listFile[index];
  const content = readFileSync(path + "/" + targetFile, { encoding: "utf-8" });
  return content;
}

module.exports = { getListText, getText };
