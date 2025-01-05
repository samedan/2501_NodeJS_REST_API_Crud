import express from "express";
import bodyParser from "body-parser"; // take incoming POST requests

const app = express();

const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Nodejs");
});

app.listen(PORT, () => {
  console.log(`Server running on Port: http://localhost:${PORT}`);
});
