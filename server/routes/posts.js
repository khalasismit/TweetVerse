import express from 'express'
import { createPost, deletePost, getFeedPosts, getUserPosts } from '../controllers/posts'
import { verifyToken } from '../middleware/verifyToken'

const router = express.Router()

router.post('/',verifyToken,createPost)
router.get('/',verifyToken,getFeedPosts)
router.get('/:userId/posts',verifyToken,getUserPosts)
router.get("/:userId/posts/:id",verifyToken,deletePost);

export default router;