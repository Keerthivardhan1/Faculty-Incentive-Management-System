import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import homeRoutes from "./routes/homeRoutes.js";
const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;
const CONNECTION_URL = process.env.MONGO_URL;


app.use("/api/users", userRoutes);
app.use("/home", homeRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use((err,req , res , next)=>{
  console.err(err.stack);
  res.status(500).json("Some thing went wrong");
})

const db = mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} - did not connect`));
