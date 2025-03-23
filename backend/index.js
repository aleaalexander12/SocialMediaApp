import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Routers
import { healthRouter } from "./routes/health.js";
import authRouter from "./routes/auth.js"; 
import postRouter from "./routes/post.js";
import userRouter from "./routes/user.js";


const app = express();

dotenv.config();
// console.log(process.env.MONGODB_URI);

// Connect to MongoDB
await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error(e));

const PORT = process.env.PORT || 4000;



// View Engine
app.set("views", "./views");
app.set("view engine", "pug");

// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// API Routes
app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);


// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
