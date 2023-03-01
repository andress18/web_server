const express = require("express");

const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Andrés Suárez",
  });
});

app.listen(8080);
