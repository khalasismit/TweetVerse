import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    post: {
      type: String,
      require: true, 
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;