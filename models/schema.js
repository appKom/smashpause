import mongoose from "mongoose";

delete mongoose.connection.models["Matches"];
delete mongoose.connection.models["Users"];

const MatchSchema = new mongoose.Schema(
  {
    player1: {type: String},
    player2: {type: String},
    winnerID: {type: String}
  },
  { autoCreate: true, timestamps: true }
);

export const Match = mongoose.model("Matches", MatchSchema);


const UserSchema = new mongoose.Schema(
    {
      id: { type: Number },
      owID: {type: String},
      rank: {type: Number}
    }, 
    { autoCreate: true }
  );
  export const User = mongoose.model("Users", UserSchema);



