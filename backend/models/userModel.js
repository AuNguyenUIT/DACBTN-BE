import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {

    name: { type: String, required: true },
    avatar: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    provincial: { type: String, required: true },
    District:{ type: String, required: true },
    Commune: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;
