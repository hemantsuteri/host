const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  console.log("received");
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});