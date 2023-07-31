import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName:{
      type: String,
      require:true,
      min: 3,
      max: 50,
    },
    lastName: {
      type: String,
      require: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
    },
    friends: {
      type: Array,
      default: [],
    },
    location:{
        type:String,
        max:50,
    }, 
    bio:{
        type:String,
        max:60,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("user",UserSchema);
export default User;