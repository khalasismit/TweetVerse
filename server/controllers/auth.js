import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
    try {
        let saltRound = 10;
        const hashedPassword = await bcrypt.hash( req.body.password , saltRound);

        const newUser = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hashedPassword,
            friends:req.body.friends,
            location:req.body.location,
            bio:req.body.bio });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json("Error");
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            console.log("Invalid User");
            return res.status(400).json("Error");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            console.log("Invalid Password");
            return res.status(400).json("Error");
        } 

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            delete user.password;
            return res.status(200).json({ token, user });
        }
    } catch (err) {
        res.status(500).json("Error");
    }
};