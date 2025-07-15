const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const config = require("config");
const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"))
    app.listen(PORT, () => {
      console.log("Server started at port ", PORT);

    })
  } catch (error) {

  }
}

start();