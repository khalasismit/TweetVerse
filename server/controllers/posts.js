import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId,post } = req.body; 
    const user = await User.findById({ _id : userId });
    const newPost = new Post({
      userId: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      post: post
    });
    await newPost.save();
    const posts = await Post.find();
    res.status(201).json(posts);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
/* READ */
export const getFeedPosts = async (req,res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({userId : userId});
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}; 

// Delete Post 

export const deletePost = async (req,res) =>{
  try {
      const { userId , id } = req.params;
      await Post.findByIdAndDelete({userId:userId,_id:id}); 
      res.status(200).json("POST DELETED")
  } catch (error) {
    res.status(404).json(error)
  }
}