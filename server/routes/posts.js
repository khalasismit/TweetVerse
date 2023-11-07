import express from 'express'
import { createPost, deletePost, getFeedPosts, getUserPosts,updatePost,getTotalPost } from '../controllers/posts.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.post("/",verifyToken,createPost);
router.get("/",getFeedPosts);
router.get("/:userId/posts",verifyToken,getUserPosts);
router.get("/:userId/posts/:id",verifyToken,deletePost);
router.post("/editpost/:id",updatePost);
router.get("/getTotalPosts",getTotalPost)


export default router;