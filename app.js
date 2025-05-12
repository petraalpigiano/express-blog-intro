import posts from "./posts.js";
import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Il mio server sta ascoltando correttamente alla porta: ${port}`);
});
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
app.get("/bacheca", (req, res) => {
  res.json("Server del mio blog");
});
