const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
