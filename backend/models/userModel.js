import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    oab:{ type:String, require:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    passwordResetToken:{ type:String, select:false,},
    passwordResetExpires:{ type:Date, select:false,},
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;