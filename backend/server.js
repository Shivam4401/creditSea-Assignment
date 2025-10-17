import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "creditSea server created!",
  });
});

app.use("/api", uploadRoutes);
app.use("/api", reportRoutes);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
  connectDb();
});
