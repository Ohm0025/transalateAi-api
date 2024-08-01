const { readdirSync, readFileSync } = require("fs");
const { path_memory } = require("../detail");

const path = path_memory;

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
