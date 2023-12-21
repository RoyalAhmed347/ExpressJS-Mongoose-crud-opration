const express = require("express");

const { connectMongoDB } = require("./connection");
const { LogReqRes } = require("./middlewares/index");
const userRouter = require("./routers/user");

const app = express();
const PORT = 8000;

// database connection
connectMongoDB("mongodb://127.0.0.1:27017/garg").then(() =>
  console.log("MongoDB is connected...")
);

// Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(LogReqRes("log.txt"));

// Routes

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Server is runing on " + PORT);
});
