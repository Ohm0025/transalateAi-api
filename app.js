const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router/router");

const app = express();
dotenv.config();

const port = process.env.PORT;
const env = process.env.ENV;

app.use(morgan(env));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "test connect api success" });
});

app.listen(port, () => console.log("server run on " + port));
