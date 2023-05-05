require("dotenv").config();
require("./db/connect");
const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const { TASK_API_URL } = require("./utils/const");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager App.");
});

app.use(TASK_API_URL, taskRouter);

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
