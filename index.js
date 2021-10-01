const express = require("express");
const path = require("path");
const app = express();

require("./routes/router")(app);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3030;
const server = app.listen(PORT, () => console.log(`Running on ${PORT}`));

module.exports = server;
