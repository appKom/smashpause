import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    id: { type: Number },
    owID: { type: String },
    rank: { type: Number },
  },
  { autoCreate: true }
);

export const User = mongoose.model('Users', UserSchema);

export interface UserData {
  id: Number;
  owID: String;
  rank: Number;
}
