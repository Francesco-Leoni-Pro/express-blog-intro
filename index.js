const express = require("express");
const app = express();
const port = 3000;
const posts = require("./posts");
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "images")));

// Rotta base
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Rotta bacheca
app.get("/bacheca", (req, res) => {
  res.json({
    totale: posts.length,
    posts: posts
  });
});

// Avvio server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});