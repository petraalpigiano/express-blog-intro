const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Il mio server sta ascoltando correttamente alla porta: ${port}`);
});
