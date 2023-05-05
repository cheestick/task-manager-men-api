require("dotenv").config();
const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const { API_TASK_URL } = require("./utils/const");
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager App.");
});

app.use(API_TASK_URL, taskRouter);

// server
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(DB_URI);
    app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
