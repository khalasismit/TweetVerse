import express from "express";
import { DeleteUser, EditUser, getTotalUser, getUser, getUsers, searchUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/", getUsers);
router.get("/search/:search/", verifyToken, searchUser);
router.post("/edituser/:id", EditUser);
router.post("/deleteuser/:id", DeleteUser);
router.get("/count/getTotalUser", getTotalUser);

export default router;