const express = require("express");
const app = express();
const port = 3000;
// const posts = [
//   {
//     title: "Ciambellone",
//     content: "Ricetta del ciambellone",
//     img: "/images/ciambellone.jpeg",
//     tags: ["Dolce", "Vaniglia"],
//   },
//   {
//     title: "Cracker alla barbabietola",
//     content: "Ricetta dei cracker alla barbabietola ",
//     img: "/images/cracker_barbabietola.jpeg",
//     tags: ["Salato", "Barbabietola"],
//   },
//   {
//     title: "Pane fritto dolce",
//     content: "Ricetta del pane fritto dolce ",
//     img: "/images/pane_fritto_dolce.jpeg",
//     tags: ["Dolce", "Pane"],
//   },
//   {
//     title: "Pasta alle barbabietole",
//     content: "Ricetta della pasta alle barbabietole ",
//     img: "/images/pasta_barbabietola.jpeg",
//     tags: ["Dolce", "Vaniglia"],
//   },
//   {
//     title: "Ciambellone",
//     content: "Ricetta del ciambellone",
//     img: "/images/ciambellone.jpeg",
//     tags: ["Dolce", "Vaniglia"],
//   },
// ];
app.listen(port, () => {
  console.log(`Il mio server sta ascoltando correttamente alla porta: ${port}`);
});
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
