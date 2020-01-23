const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Aum Namah Shivaya");
});

app.listen(4000, console.log(`Aum Namah Shivaya`));
