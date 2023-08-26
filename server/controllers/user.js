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

export const searchUser = async (req, res) => {
  try {
    const { search } = req.params;
    const SearchText = new RegExp(`^${search}`, 'i')
    const user = await User.find({ firstName: SearchText });
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