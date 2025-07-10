import express from "express";
import "dotenv/config";
import cors from "cors";
import Route from "./src/routes/Route";
const port = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", Route);

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      data: {
        message: "Hello World",
      },
      success: true,
      error: {},
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
