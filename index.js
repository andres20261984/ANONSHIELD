
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("public"));

app.get("/generate", (req, res) => {
  const domain = "anonshield.email";
  const name = Math.random().toString(36).substring(2, 10);
  const email = `${name}@${domain}`;
  res.json({ email });
});

app.listen(PORT, () => console.log("Servidor corriendo en puerto " + PORT));
