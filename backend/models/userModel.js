import mongoose from "mongoose";
import validator from "validator";

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name"],
      maxLength: [
        25,
        "Invalid Name.Please enter a name less than 25 characters",
      ],
      minLength: [
        3,
        "Invalid Name.Please enter a name greater than 2 characters",
      ],
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please enter the password"],
      select: false,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,

    verificationToken: String,
    verificationTokenExpireAt: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userschema);
export default User;
