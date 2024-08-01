const express = require("express");
const writeNewText = require("../services/writeFile");
const { getListText, getText } = require("../services/getText");
const { runAi } = require("../services/googleGenAi");
const router = express.Router();

router.get("/router", (req, res) => {
  res.status(200).json({ message: "test router" });
});

router.get("/getAllText", (req, res) => {
  const listText = getListText();
  res.status(200).json({ AllText: listText });
});

router.get("/getText/:index", (req, res) => {
  const { index } = req.params;
  const content = getText(index);
  res.status(200).json({ content: content });
});

router.post("/", (req, res) => {
  const { text } = req.body;
  writeNewText(text);
  res.status(201).json({ message: "success ?", text });
});

router.post("/runAi", async (req, res) => {
  try {
    const { sentence } = req.body;
    const text = await runAi(sentence);
    res.status(201).json({ text: text });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err });
  }
});

module.exports = router;
