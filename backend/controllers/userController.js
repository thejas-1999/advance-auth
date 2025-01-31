import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateTokens.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("All Fields are required");
    }

    const verificationToken = Math.floor(
      100000 + Math.random() * 90000
    ).toString();

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpireAt: Date.now() + 2 * 60 * 60 * 1000,
    });

    generateToken(res, user._id);

    res.status(200).json({
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
