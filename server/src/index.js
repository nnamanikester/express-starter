const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const middlewares = require("./middlewares");

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Express Server Setup");
});

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
