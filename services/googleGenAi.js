const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const initPrompt = process.env.PROMPT;
const api_key = process.env.API_KEY;

const genAi = new GoogleGenerativeAI(api_key);

async function runAi(sentence) {
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = initPrompt + " " + sentence;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}

module.exports = { runAi };
