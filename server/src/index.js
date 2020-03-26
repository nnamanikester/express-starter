const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
