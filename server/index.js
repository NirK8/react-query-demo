const express = require("express");

const api = require("./api");

const app = express();
const port = 8080;

app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
