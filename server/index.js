import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
// import { login, register } from "./controllers/auth.js";
// import { createPost, deletePost, getFeedPosts, getTotalPost, getUserPosts, updatePost } from "./controllers/posts.js";
// import { DeleteUser, EditUser, getTotalUser, getUser, getUsers, searchUser } from "./controllers/user.js";
// import { verifyToken } from "./middleware/verifyToken.js";

// Error in fetch api if use routes/
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js"
import usersRoute from "./routes/users.js"

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* ROUTES */
app.use("/auth",authRoute)

// app.post("/posts",verifyToken,createPost);
// app.get("/posts",getFeedPosts);
// app.get("/posts/:userId/posts",verifyToken,getUserPosts);
// app.get("/posts/:userId/posts/:id",verifyToken,deletePost);
// app.post("/editpost/:id",updatePost);
// app.get("/getTotalPosts",getTotalPost)
app.use("/posts",postsRoute);

// app.get("/users/:id",verifyToken,getUser);
// app.get("/users",getUsers);
// app.get("/getTotalUser",getTotalUser);
// app.get("/:search",verifyToken,searchUser);
// app.post("/edituser/:id",EditUser);
// app.post("/deleteuser/:id",DeleteUser);

app.use("/users",usersRoute);

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