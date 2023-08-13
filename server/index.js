import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { login, register } from "./controllers/auth.js";
import { createPost, deletePost, getFeedPosts, getUserPosts } from "./controllers/posts.js";
import { getUser } from "./controllers/user.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES */
app.post("/auth/register", register);
app.post("/auth/login",login);
app.get("/users/:id",getUser);
app.post("/posts", createPost);
app.get("/posts",getFeedPosts);
app.get("/posts/:userId/posts",getUserPosts);
app.get("/posts/:userId/posts/:id",deletePost);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));