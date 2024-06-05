import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import PostRoute from "./routes/PostRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

// routenya
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/", PostRoute);

// connect data bae nya
ConnectDB();

// portnya
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
