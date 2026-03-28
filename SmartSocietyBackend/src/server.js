const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend chal raha hai 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});