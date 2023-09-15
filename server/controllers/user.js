import User from "../models/User.js";
/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUsers = async (req,res) =>{
  try { 
    const users = await User.find();
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const getTotalUser = async(req,res)=>{
  try {
    const totalUser = await User.count()
    res.status(200).json(totalUser)
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const recentUsers = async(req,res)=>{
  try {
    const recents = await User.find().limit(10)
    res.status(200).json(recents)
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
} 

export const searchUser = async (req, res) => {
  try {
    const { search } = req.params;
    const SearchText = new RegExp(`^${search}`, 'i')
    const user = await User.find({$or:[{ firstName: SearchText },{lastName:SearchText}]}).sort({firstName: 1});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error })
  }
}
export const EditUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      location,
      bio
  }=req.body;
    const user = await User.findByIdAndUpdate(id,{firstName,lastName,location,bio});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error })
  }
}

export const DeleteUser = async (req,res)=>{
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id)
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error })
  }
} 